SELECT 
    maintable_V47CA.GroupID,
    cb_vendorinformation.CompanyName,
    COUNT(maintable_V47CA.GroupID) AS `Count`
FROM 
    maintable_V47CA
JOIN cb_vendorinformation ON cb_vendorinformation.GroupID = maintable_V47CA.GroupID
GROUP BY
    maintable_V47CA.GroupID,
    cb_vendorinformation.CompanyName
ORDER BY 
    COUNT(maintable_V47CA.GroupID),
    maintable_V47CA.GroupID
