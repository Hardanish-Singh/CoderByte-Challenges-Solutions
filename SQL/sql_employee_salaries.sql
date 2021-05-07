SELECT 
        maintable_M3LJZ.ID, 
        maintable_M3LJZ.Name, 
        cb_companydivisions.DivisionName AS DivisionName,
        t.Name AS ManagerName,
        maintable_M3LJZ.Salary 
FROM maintable_M3LJZ

JOIN cb_companydivisions ON cb_companydivisions.id = maintable_M3LJZ.DivisionID

JOIN 
(
  SELECT 
      Name, 
      ID
  FROM    
      maintable_M3LJZ
)AS t ON t.ID = maintable_M3LJZ.ManagerID

WHERE Salary = (
                  SELECT 
                        MIN(Salary) 
                  FROM (
                            SELECT  
                                        * 
                            FROM 
                                        maintable_M3LJZ 
                            ORDER BY salary DESC 
                            LIMIT 3
                       ) AS x
               )