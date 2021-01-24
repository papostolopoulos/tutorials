/*Create a table*/
CREATE TABLE exercise_logs
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT,
    minutes INTEGER,
    calories INTEGER,
    heart_rate INTEGER);

/*Insert rows in table - The AUTOINCREMENT from the id helps us to not have to
enter the id mannualy*/
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ("biking", 30, 115, 110);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ("biking", 10, 45, 105);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ("dancing", 15, 200, 120);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ("dancing", 15, 165, 120);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ("tree climbing", 30, 70, 90);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ("tree climbing", 25, 72, 80);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ("rowing", 30, 70, 90);
INSERT INTO exercise_logs(type, minutes, calories, heart_rate) VALUES ("hiking", 60, 80, 85);




CREATE TABLE drs_favorites
    (id INTEGER PRIMARY KEY,
    type TEXT,
    reason TEXT);

INSERT INTO drs_favorites(type, reason) VALUES ("biking", "Improves endurance and flexibility.");
INSERT INTO drs_favorites(type, reason) VALUES ("hiking", "Increases cardiovascular health.");








/*Select one column*/
SELECT type from exercise_logs;


/*Select everything from table*/
SELECT * from exercise_logs;


/*WHERE clause to filter results under a condition*/
SELECT * FROM exercise_logs WHERE calories > 100;


/*ORDER BY clause to order results*/
SELECT * FROM exercise_logs WHERE calories > 100 ORDER BY calories;


/*AGGREGATE FUNCTIONS ex: SUM() MAX() AVG() COUNT()*/
SELECT SUM(calories) from exercise_logs;


/*GROUP BY to group results by a specific column. BEWARE You should GROUP BY with a column
that you also have in SELECT*/
SELECT type SUM(calories) FROM exercise_logs GROUP BY type;


/*IN statement to filter results*/
/*instead of:*/
SELECT * FROM exercise_logs WHERE
type = "biking" OR
type = "hiking" OR
type = "rowing";

/*do this instead*/
SELECT * FROM exercise_logs WHERE type IN ("biking", "hiking", "rowing");


/*The NOT statement is used to exclude results*/
SELECT * FROM exercise_logs WHERE type NOT IN ("biking", "hiking", "rowing");


/*The IN statement gives us the chance to include a query in another query.*/
SELECT * FROM exercise_logs
WHERE type (
  SELECT type FROM drs_favorites
);


/*LIKE statement is used to find values that are not exact but they are close to the query*/
SELECT * FROM exercise_logs
WHERE type (
  SELECT type FROM drs_favorites
  WHERE reason
  LIKE "%cardiovascular%"
);


/*The AS statement is used when we want to rename a column*/
SELECT type SUM(calories) AS total_calories FROM exercise_logs GROUP BY type;

/*The HAVING statement is used to filter the results.
The difference between HAVING and WHERE is that WHERE is filtering
the rows individually where as HAVING can be used to filter ALL the columns that are
grouped in a function and fulfil a condition ex:SUM()*/

SELECT type SUM(calories)
AS total_calories
FROM exercise_logs
GROUP BY type
HAVING total_calories > 150;
/*See in the above example how the HAVING statement is used to filter out the total_calories*/

/*We can use regular math statements in SQL*/
SELECT COUNT(*) FROM exercise_logs WHERE heart_rate > 220 - 30;


/*And we can use math statements inside functions. In the following query, we
are filtering the results by finding all the values that are between the 50% and 90%*/
SELECT COUNT(*)
FROM exercise_logs
WHERE heart_rate >= ROUND(O.50 * (200-30))
AND heart_rate <= ROUND(0.90 * (200 - 30));


/*The CASE statement is used to group rows together when there is no particular column
to group the rows with. For example, in the above query, we cannot display the
types of exercises grouped together because we do not have the right column for that.
CASE is similar to an IF statement from JavaScript*/
SELECT type, heart_rate,
  CASE
    WHEN heart_rate > 220 - 30 THEN "above max"
    WHEN heart_rate > ROUND(0.90 * (200 - 30)) THEN "above target"
    WHEN heart_rate > ROUND(0.50 * (200 - 30)) THEN "within target"
    ELSE "below target"
  END AS "hr_zone" /*The name that we want to give to our column*/
FROM exercise_logs;

/*The above query can become better if we group by the new column and we add a
COUNT() function*/
SELECT type, COUNT(*),
  CASE
    WHEN heart_rate > 220 - 30 THEN "above max"
    WHEN heart_rate > ROUND(0.90 * (200 - 30)) THEN "above target"
    WHEN heart_rate > ROUND(0.50 * (200 - 30)) THEN "within target"
    ELSE "below target"
  END AS "hr_zone" /*The name that we want to give to our column*/
FROM exercise_logs
GROUP BY hr_zone;
