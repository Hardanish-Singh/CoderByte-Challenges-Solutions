/***************************************************************************************
 *                         CODERBYTE SQL VENDOR JOIN CHALLENGE                         *
 * In this MySQL challenge, your query should return the vendor information along with *
 * the values from the table cb_vendorinformation. You should combine the values of the*
 * two tables based on the GroupID column. The final query should only print out the   *
 * GroupID, CompanyName, and final count of all rows that are grouped into each company*
 * name under a column titled Count. The output table should be then sorted by the     *
 * Count column and then sorted by GroupID so that a higher number appears first.      *
 *                                                                                     *
 * Your output should look like the following table.                                   *
 *                                                                                     *
 *                       +---------+---------------------+-------+                     *
 *                       | GroupID | CompanyName         | Count |                     *
 *                       +---------+---------------------+-------+                     *
 *                       |       27| Machinx             |      1|                     *
 *                       |        5| WaterBus Enterprise |      1|                     *
 *                       |       36| Johnson and Sons    |      2|                     * 
 *                       |       35| Shipping & Co.      |      3|                     *
 *                       |        6| Alloy LLC           |      3|                     *
 *                       |       40| FireConsulting      |      5|                     *
 *                       |       39| News Corp.          |      6|                     *
 *                       +---------+---------------------+-------+                     *
 *                                                                                     *
 **************************************************************************************/

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
