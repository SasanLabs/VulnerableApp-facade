local vulnerableapp_utility = {}

function vulnerableapp_utility.merge_vulnerability_information(vulnerableAppResponse, vulnerableAppJspResponse, vulnerableAppPhpResponse, llmForgeResponse)
    local response = "{"
    local appendComma = false
    if (vulnerableAppResponse.status == 200) then
        response = response .. '"VulnerableApp":' .. vulnerableAppResponse.body
        appendComma = true
    end
    if (llmForgeResponse and llmForgeResponse.status == 200) then
        if (appendComma) then
            response = response .. ","
        end
        appendComma = true
        response = response .. '"llmforge":' .. llmForgeResponse.body
    end
    if (vulnerableAppJspResponse.status == 200) then
        if (appendComma) then
            response = response .. ","
        end
        appendComma = true
        response = response .. '"VulnerableApp-jsp":' .. vulnerableAppJspResponse.body
    end
    if (vulnerableAppPhpResponse.status == 200) then
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