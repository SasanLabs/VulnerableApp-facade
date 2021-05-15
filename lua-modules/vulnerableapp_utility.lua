local vulnerableapp_utility = {}

function vulnerableapp_utility.merge_vulnerability_information(vulnerableAppResponse)
    local response = "{"
    local appendComma = false
    if (vulnerableAppResponse.status == 200) then
        response = response .. '"VulnerableApp":' .. vulnerableAppResponse.body
        appendComma = true
    end
    #if (vulnerableAppJspResponse.status == 200) then
    #    if (appendComma) then
    #        response = response .. ","
    #    end
    #    appendComma = true
    #    response = response .. '"VulnerableApp-jsp":' .. vulnerableAppJspResponse.body
    #end
    response = response .. "}"
    return response
end

return vulnerableapp_utility