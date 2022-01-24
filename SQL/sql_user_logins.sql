/*********************************************************************************************
 *                            CODERBYTE SQL USER LOGINS CHALLENGE                            *
 *                                                                                           *
 * Your table: maintable_O9AAP                                                               *
 * MySQL version: 5.5.56-log                                                                 *
 *                                                                                           *
 *      +---------------+---------------+                                                    *
 *      | ID            | DateJoined    |                                                    *
 *      +---------------+---------------+                                                    *
 *      | 2343434	| 2017-01-06    |                                                    *
 *      | 6343544	| 2017-01-12    |                                                    *
 *      | 355445	| 2017-01-16    |                                                    *
 *      | 2322324	| 2017-01-25    |                                                    *
 *      | 122323	| 2017-02-05    |                                                    *
 *      | 454343	| 2017-02-07    |                                                    *
 *      | 2342342	| 2017-02-21    |                                                    *
 *      | 1322323	| 2017-03-05    |                                                    *
 *      | 5341124	| 2017-03-07    |                                                    *
 *      | 13663442	| 2017-03-14    |                                                    *
 *      | 26323242	| 2017-03-16    |                                                    *
 *      | 12263545	| 2017-03-25    |                                                    *
 *      | 23423423	| 2017-03-25    |                                                    *
 *      | 34452352	| 2017-03-25    |                                                    *
 *      | 235534534	| 2017-03-25    |                                                    *
 *      | 22224233	| 2017-03-26    |                                                    *
 *      | 3353235	| 2017-04-05    |                                                    *
 *      | 56243434	| 2017-04-14    |                                                    *
 *      | 33463266	| 2017-04-21    |                                                    *
 *      | 6634653	| 2017-05-07    |                                                    *
 *      | 2342324	| 2017-05-14    |                                                    *
 *      | 2366436	| 2017-05-16    |                                                    *
 *      | 1123124	| 2017-05-25    |                                                    *
 *      | 3534534	| 2017-05-25    |                                                    *
 *      | 46763543	| 2017-05-25    |                                                    *
 *      | 33463255	| 2017-05-25    |                                                    *
 *      +---------------+---------------+                                                    *
 *                                                                                           *
 * Problem Statement                                                                         *
 * In this MySQL challenge, the table provided shows all new users signing up on a specific  *
 * date in the format YYYY-MM-DD. Your query should output the change from one month to the  *
 * next. Because the first month has no preceding month, your output should skip that row.   * 
 * Your output should look like the following table.                                         *   
 *                                                                                           *
 *                                                                                           *
 *                        +-----------------+---------------------+                          *
 *                        | Month           | MonthToMonthChange  |                          *
 *                        +-----------------+---------------------+                          *
 *                        | February        | -1                  |                          *
 *                        | March           | 6                   |                          *
 *                        | April           | -6                  |                          *
 *                        | May             | 4                   |                          *
 *                        +-----------------+---------------------+                          *
 *                                                                                           *
 ********************************************************************************************/

/*
        SOLUTION ONE WITHOUT LAG FUNCTION
*/
SELECT
        MONTHNAME(STR_TO_DATE(MONTH(DateJoined), '%m')) AS Month,
        date1 - previous AS MonthToMonthChange
FROM
(
        SELECT
                date1,
                DateJoined,
                @prev previous, 
                @prev := date1 AS prev
        FROM 
        (
                SELECT 
                        COUNT(DateJoined) AS date1,
                        DateJoined,
                        ( SELECT @prev := '' ) r
                FROM 
                        maintable_O9AAP
                GROUP BY MONTH(DateJoined)
                ORDER BY DateJoined
        )AS SubQuery1
) AS SubQuery2
WHERE previous > 0

/*
        SOLUTION 2 WITH LAG FUNCTION, USED IN MYSQL VERSION 8.0+
*/

SELECT
        MONTHNAME(STR_TO_DATE(MONTH(DateJoined), '%m')) AS Month,
        date1 - date2 AS MonthToMonthChange
FROM
(
        SELECT
                date1,
                LAG(date1, 1) OVER ( )AS date2,
                DateJoined
        FROM 
        (
                SELECT 
                        COUNT(DateJoined) AS date1,
                        DateJoined
                FROM 
                        leetcode.user_login
                GROUP BY MONTH(DateJoined)
                ORDER BY DateJoined
        )AS SubQuery1
) AS SubQuery2
WHERE SubQuery2.date2 IS NOT NULL;
