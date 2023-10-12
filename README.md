![CrowdStrike Falcon](/docs/asset/cs-logo.png?raw=true)

# Triage with MITRE Attack sample Foundry app

The Triage with MITRE Attack sample Foundry app is a community-driven, open source project which serves as an example of an app which can be built using CrowdStrike's Foundry ecosystem.
`foundry-sample-mitre` is not a formal CrowdStrike project and is maintained by the open source developer community.

# CrowdStrike Triage with MITRE ATT&CK

This folder contains all the projects and the configuration for the `mitre` sample app (vue).
In here you can find, **collections**, **ui** and the apps' `manifest.yml`.

**collections** are used for some components inside the extension and main app, the projects are stored inside `ui`

In `ui` you can find:

- **extensions**: contains `remediations` app
- **pages**: contains `chart-vue` which is the Mitre's chart page done with vue

_while `remediations` and `chart-vue` are **vue projects**, all related with one another, it's **worth noticing** that you can add other projects with other technologies, completely un-related with the forementioned._

## Development

In order to be able to see (and develop) your local page/extension you just have to:

1. Run `foundry ui run` in this directory
2. The pages/extensions you're developing must have been built (_suggestion:_ use watchers for hot module reload).

With the following, you should be able to start and develop all of the projects under `mitre`:

1. Run `yarn`
2. Run `yarn start`, this will run **type-checks** and `build-watch` for every project.
3. Concurrently, run `foundry ui run`.
4. now you are ready to test your changes with local code (remember to turn on "development mode"

### If you are developing a page

1. Search the page id id in the `manifest.yml`, copy it.
2. Go to `foundry/page/{{page-id}}` (**note**: replace `{{page-id}}` with the copied one in step 5)
3. be sure that the **development** mode is active, or you will be seeing the current "deployed" page

### If you are developing an extension

1. Go to the page where your extension is mounted.
2. be sure that the **development** mode is active, or you will be seeing the current "deployed" extension

## Hands-on projects

You can find more about the specific projects and libraries with the following links:

- [Mitre chart (vue)](./ui//pages/chart-vue/README.md)
- [Auto remediation extension](./ui/extensions/remediations/README.md)
- [Mitre's shared vue logic](./ui/shared/mitre-vue/README.md)
