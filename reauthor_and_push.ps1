git config user.name "Neurocraft01"
git config user.email "neurocraftai@gmail.com"

git add -A
$treeId = (git write-tree).Trim()
$commitId = (git commit-tree $treeId -m "feat: complete SEO package, schema markup, and verification guide").Trim()
git reset --hard $commitId

Write-Host "Updated Git Log:"
git log -n 1 --format="%h - %an <%ae> : %s"

Write-Host "Pushing to GitHub..."
git push origin main --force
