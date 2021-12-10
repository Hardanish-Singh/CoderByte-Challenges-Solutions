SELECT 
        * 
FROM 
(
        SELECT 
                main_table.GroupID,
                main_table.FirstName,
                main_table.LastName,
                main_table.Job,
                main_table.ExternalID,
                cb_vendorinformation.CompanyName,
        ( SELECT COUNT(*) FROM maintable_J22DJ AS sub_table WHERE main_table.FirstName = sub_table.FirstName ) AS Count
        FROM 
                maintable_J22DJ AS main_table
        JOIN cb_vendorinformation ON cb_vendorinformation.GroupID = main_table.GroupID
        GROUP by FirstName, LastName
) AS SubQuery
ORDER BY SubQuery.COUNT, SubQuery.CompanyName, SubQuery.FirstName DESC