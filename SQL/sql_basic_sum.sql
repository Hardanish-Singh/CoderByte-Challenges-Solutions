/*****************************************************************************************************************
*                                               SQL BASIC SUM                                                    *
*                                                                                                                *
*        Your table: maintable_OT6J7                                                                             *
*        MySQL version: 5.5.56-log                                                                               *
*                                                                                                                *
*        In this MySQL challenge,                                                                                *
*        your query should return LastName & the sum of Age from your table for all users with a LastName = Smith*
*        The column title of the summed ages should be SumAge. Your output should look like the following table. *
*                                                                                                                *
*        +----------+---------+                                                                                  *
*        | Lastname | SumAge  |                                                                                  *
*        +----------+---------+                                                                                  *
*        | Smith    |      47 |                                                                                  *
*        +----------+---------+                                                                                  *
*                                                                                                                *
*****************************************************************************************************************/

SELECT 
        LastName,
        SUM(Age) AS SumAge
FROM 
        maintable_OT6J7
WHERE LastName = 'Smith';