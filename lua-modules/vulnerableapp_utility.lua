local vulnerableapp_utility = {}

-- An app can answer 200 with a body that is not JSON. VulnerableApp-php does exactly that on the
-- scanner endpoints, replying "/VulnerableApp-php/scanner/dast is not available" as text/html.
-- Splicing such a body in produces a document that is not JSON at all, so the whole merged
-- response becomes unreadable rather than one app being missing from it.
local function carries_json(response)
    if (not response or response.status ~= 200 or not response.body) then
        return false
    end
    local first = response.body:match("^%s*(.)")
    return first == "[" or first == "{"
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