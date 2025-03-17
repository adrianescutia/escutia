---
title: "How to Grant Access to Specific Tables in a Schema in PostgreSQL (Supabase Fix)"
description: "Errror 42501, resulting in 403 Forbidden error when trying to access a table in a schema on Supabase. How to fix it."
image: https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
authors:
  - adrian
tags:
  - postgresql
  - supabase
  - database
  - troubleshooting
keywords:
  - PostgreSQL
  - Supabase
  - Database
  - Troubleshooting
---

# How to Grant Access to Specific Tables in a Schema in PostgreSQL (Supabase Fix)  

I recently ran into a **permission error** when trying to access a table in a schema on Supabase:  

```
Error 42501: "Permission denied for [TABLENAME]"
```

Resulting in a **403 Forbidden** error.

After some troubleshooting, I found that **granting access to specific tables** in the schema solved the issue. I'm sharing my solution here in case it helps you too!  

<!-- truncate -->

## Why Grant Access to Specific Tables?  

By default, PostgreSQL lets you **grant access to an entire schema**, but that might not be ideal if you want to **limit access to only certain tables**.  

I prefer a more **fine-grained approach**, where users or roles only get access to the tables they actually need.  

## Step 1: Check Current Table Permissions  

Before making any changes, you can check the **current privileges** on a specific table using this SQL query:  

```sql
SELECT grantee, privilege_type  
FROM information_schema.role_table_grants  
WHERE table_name = 'mytable';
```  

This helps ensure you're not granting unnecessary permissions or overriding existing ones.  

## Step 2: Grant Access to a Specific Table  

To grant **SELECT, INSERT, UPDATE, and DELETE** privileges on a specific table, use the following SQL command:  

```sql
GRANT SELECT, INSERT, UPDATE, DELETE ON mytable TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON mytable TO anon;
```  

This allows only the **specified users or roles** to access the table while keeping other tables in the schema restricted.  

## Problem Solved!  

After running this command, my issue was resolved. If you're facing the same error in Supabase (or PostgreSQL in general), this should work for you too!  

### Your Thoughts?  

Have you encountered similar permission issues in PostgreSQL or Supabase? Let me know how you handle table-level access in the comments!  
