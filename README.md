# HostListCompiler-Action
A github action for [HostlistCompiler](https://github.com/AdguardTeam/HostlistCompiler)

# Examples
Here is an example from my [blocklist](https://github.com/Satellite-Galaxy/Blocklists)

```yml
name: Compile Hosts

on:
  push:
    branches: [ "main" ]
    
  schedule:
    - cron:  '30 5,17 * * *'
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    if: "! contains(github.event.head_commit.message, '[ci skip]')"

    steps:
      - name: Checkout files
        uses: Bhacaz/checkout-files@v2
        with:
         files: compiler.json
      -
        name: Compile host list
        id: compile
        uses: Satellite-Galaxy/HostListCompiler-Action@latest
        with:
          config: compiler.json
          output: hosts.txt
      - uses: "marvinpinto/action-automatic-releases@latest"
        with:
          repo_token: "${{ secrets.GITHUB_TOKEN }}"
          automatic_release_tag: "latest"
          prerelease: true
          title: "Compiled hosts"
          files: |
            hosts.txt
```
