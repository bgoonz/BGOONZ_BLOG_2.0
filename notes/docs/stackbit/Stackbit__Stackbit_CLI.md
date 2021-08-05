## [](https://www.stackbit.com/docs/reference/stackbit-cli/#installation)Installation

Install Stackbit CLI tool using npm:

Once installed, you can run CLI commands to generate and validate your `stackbit.yaml`.

Check out the [latest release on GitHub](https://github.com/stackbit/stackbit-sdk/releases).

## [](https://www.stackbit.com/docs/reference/stackbit-cli/#commands)Commands

### [](https://www.stackbit.com/docs/reference/stackbit-cli/#init)`init`

The `init` command introspects your project files and generates the initial `stackbit.yaml` for you. To generate a new `stackbit.yaml` file, run the `init` command inside your project's root folder:

Stackbit CLI will generate the initial `stackbit.yaml` according to your project files. If your project doesn't use any CMS, the `init` command will also generate the content model. The content model generation relies on your project's content files (e.g., `.md`, `.json`, `.yaml`).

Note that the generated `stackbit.yaml` is the "**best guess**", so it might not have the best content model for your site. For example, fields that could store markdown content might be marked as strings. After generating the `stackbit.yaml` file, we recommend reviewing it and adjusting it if needed. We also recommend running the `validate` command to check if there are content files without matched models.

### [](https://www.stackbit.com/docs/reference/stackbit-cli/#validate)`validate`

The `validate` command runs the following validation steps:

-   It loads the `stackbit.yaml` from the current working directory and validates its structure according to the [specification](https://www.stackbit.com/docs/reference/stackbit-yaml).
-   It loads your site's content files from folders defined by the [`pagesDir`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#pagesdir) and the [`dataDir`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#datadir) properties.
-   It matches the loaded content files to the [`models`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#models) defined in `stackbit.yaml` using the "[model matching properties](https://www.stackbit.com/docs/reference/stackbit-yaml/page-models/#page_model_matching_properties)" such as `file`, `folder`, `match` and `exclude`.
-   It validates the structure of your content files against the [`models`](https://www.stackbit.com/docs/reference/stackbit-yaml/properties/#models) defined in the `stackbit.yaml`.

If the validator finds any errors during these validation steps, it will print them to your console providing contextual information allowing you to fix them.

**Example**

Assume the following site structure:

And a `stackbit.yaml` similar to this:

If everything is configured correctly, running `stackbit validate` will output this:

## [](https://www.stackbit.com/docs/reference/stackbit-cli/#telemetry)Telemetry

Stackbit contains a telemetry feature that collects **anonymous** information on the usage of Stackbit CLI commands. We do this to improve the reliability of Stackbit CLI and help drive new features and improvements.

If you’d like to opt-out of sending usage information, you can do so by running the following command:

**What data is being shared?**

We track general usage information, including CLI commands being invoked and **non-user-specific** command-line arguments, SSG and CMS names, number of occurred errors, etc. We use these metrics to better understand the usage patterns and improve the CLI.

Specifically, we collect the following information:

-   Command invoked (e.g., `init` or `validate`).
-   Timestamp of the event.
-   Stackbit CLI and SDK versions.
-   Node.js and OS versions.
-   Anonymous user ID - this is generated once using UUID and stored in the global config at `~/.config/stackbit-cli/config.json`.
-   The analyzed SSG and CMS name, and the number of the generated models in case of the `init` command.
-   The number of validation errors, and the number of validated files in case of the `validate` command.
-   One-way hashes of the input directory and the git remote.