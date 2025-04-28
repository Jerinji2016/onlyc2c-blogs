# Sitemap Submission to Google

This document explains how the automated sitemap submission to Google Search Console works and how to set it up.

## Overview

The sitemap submission is handled by a GitHub Action that automatically runs after a successful deployment. It uses the Google Search Console API to submit the sitemap URL to Google, which helps Google discover and index new content on your site.

## How It Works

1. After a successful deployment to GitHub Pages, the `sitemap.yml` workflow is triggered
2. The workflow authenticates with Google Search Console API using a service account
3. It submits the sitemap URL (`https://blog.onlyc2c.com/sitemap.xml`) to Google
4. Results are logged in the GitHub Actions output

## Setup Instructions

### 1. Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Google Search Console API" for your project

### 2. Create a Service Account

1. In your Google Cloud project, go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Give it a name like "github-sitemap-submitter"
4. Grant it the necessary permissions (no specific GCP roles needed for Search Console)
5. Create a JSON key for this service account and download it

### 3. Add the Service Account to Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property (domain or URL prefix)
3. Go to "Settings" > "Users and permissions"
4. Click "Add User"
5. Add the service account email (it looks like `name@project-id.iam.gserviceaccount.com`)
6. Grant it "Owner" or at least "Full" permissions

### 4. Add the Service Account Key to GitHub Secrets

1. In your GitHub repository, go to "Settings" > "Secrets and variables" > "Actions"
2. Click "New repository secret"
3. Name: `GCS_CREDENTIALS_FILE`
4. Value: Paste the entire contents of the JSON key file you downloaded
5. Click "Add secret"

## Troubleshooting

If the sitemap submission fails, check the GitHub Actions logs for error messages. Common issues include:

- Incorrect service account permissions in Search Console
- Invalid or expired service account key
- Sitemap URL not accessible or returning errors
- Property not verified in Search Console
- Repository secret `GCS_CREDENTIALS_FILE` not set or containing invalid JSON

Note: Make sure the `GCS_CREDENTIALS_FILE` repository secret contains the entire JSON content of your service account key file, including the curly braces and all fields.

## Manual Triggering

You can manually trigger the sitemap submission workflow by:

1. Going to the "Actions" tab in your GitHub repository
2. Selecting the "Submit Sitemap to Google" workflow
3. Clicking "Run workflow" and then "Run workflow" again

This is useful after making changes to your sitemap or if the automatic submission fails.
