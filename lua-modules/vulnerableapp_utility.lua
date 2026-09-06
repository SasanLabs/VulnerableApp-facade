local cjson = require("cjson.safe")

local vulnerableapp_utility = {}

-- An app can answer 200 with a body that is not JSON. VulnerableApp-php does exactly that on the
-- scanner endpoints, replying "/VulnerableApp-php/scanner/dast is not available" as text/html.
-- Splicing such a body in produces a document that is not JSON at all, so the whole merged
-- response becomes unreadable rather than one app being missing from it.
--
-- The body is decoded only to check it and is then discarded: the merge still splices the raw
-- bytes, so each app's own key order and formatting reach the caller unchanged. A truncated body
-- is refused because ngx.location.capture reports one with status 200 and a partial body, which
-- can begin like JSON and still end mid-document. Only an object or an array is accepted, since
-- the aggregate maps an app name to its findings and a bare number or string would satisfy the
-- syntax without fitting that shape.
local function carries_json(response)
    if (not response or response.status ~= 200 or not response.body or response.truncated) then
        return false
    end
    return type(cjson.decode(response.body)) == "table"
end

function vulnerableapp_utility.merge_vulnerability_information(vulnerableAppResponse, vulnerableAppJspResponse, vulnerableAppPhpResponse, llmForgeResponse)
    local response = "{"
    local appendComma = false
    if (carries_json(vulnerableAppResponse)) then
        response = response .. '"VulnerableApp":' .. vulnerableAppResponse.body
        appendComma = true
    end
    if (carries_json(llmForgeResponse)) then
        if (appendComma) then
            response = response .. ","
        end
        appendComma = true
        response = response .. '"llmforge":' .. llmForgeResponse.body
    end
    if (carries_json(vulnerableAppJspResponse)) then
        if (appendComma) then
            response = response .. ","
        end
        appendComma = true
        response = response .. '"VulnerableApp-jsp":' .. vulnerableAppJspResponse.body
    end
    if (carries_json(vulnerableAppPhpResponse)) then
        if (appendComma) then
            response = response .. ","
        end
        appendComma = true
        response = response .. '"VulnerableApp-php":' .. vulnerableAppPhpResponse.body
    end
    if (not appendComma) then
        local llmStatus = 0
        if (llmForgeResponse) then
            llmStatus = llmForgeResponse.status
        end
        ngx.log(ngx.ERR, "empty aggregate response; statuses: base=", vulnerableAppResponse.status, ", jsp=", vulnerableAppJspResponse.status, ", php=", vulnerableAppPhpResponse.status, ", llmforge=", llmStatus)
    end
    response = response .. "}"
    return response
end

return vulnerableapp_utility