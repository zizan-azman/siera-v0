# Create Angular app using nx console

## Step 1 - Navigate to the Nx Console option

- Click Nx Console -> Select Generate (UI) -> Type 'app' -> Select '@nx/angular - application'

## Step 2 - Nx Console config

- name: type 'apps/maine/siera-my/siera-my'
- bundler: choose 'esbuild'
- directory: leave empty
- routing: checked
- standalone: checked
- addTailwind: leave unchecked
- backendProject: leave unchecked
- e2eTestRunner: choose 'cypress'
- inlineStyle: leave unchecked
- inlineTemplate: leave unchecked
- linter: choose 'eslint'
- minimal: leave unchecked
- port: leave empty
- prefix: type 'app' (This was default)
- projectNameAndRootFormat: choose 'as-provided'
- setParserOptionsProject: leave unchecked
- skipTests: leave unchecked
- ssr: leave unchecked
- strict: checked
- style: choose 'scss'
- tags: type 'scope:siera,type:app'
- unitTestRunner: choose 'jest'
- viewEncapsulation: choose '--'

# Create Angular lib using nx console

## Step 1 - Navigate to the Nx Console option

- Click Nx Console -> Select Generate (UI) -> Type 'lib' -> Select '@nx/angular - application'

## Step 2 - Nx Console config

- name: type 'libs/maine/siera-my/shell'
- buildable: leave unchecked
- directory: leave empty
- lazy: leave unchecked
- parent: leave empty
- publishable: leave unchecked
- routing: checked
- addModuleSpec: leave unchecked
- addTailwind: leave unchecked
- changeDetection: choose 'Default'
- compilationMode: choose '--'
- displayBlock: leave unchecked
- flat: leave unchecked
- importPath: leave empty
- inlineStyle: leave unchecked
- inlineTemplate: leave unchecked
- linter: choose 'eslint'
- prefix: leave empty
- projectNameAndRootFormat: choose 'as-provided'
- selector: leave empty
- setParserOptionsProject: leave unchecked
- simpleName: leave unchecked
- skipModule: leave unchecked
- skipSelector: leave unchecked
- skipTests: leave unchecked
- skipTsConfig: leave unchecked
- standalone: checked
- strict: checked
- style: choose 'scss'
- tags: type 'scope:siera,type:shell'
- unitTestRunner: choose 'jest'
- viewEncapsulation: choose '--'

## Step 2 v2 - Nx Console config

- name: type 'siera-my-shell'
- buildable: leave unchecked
- directory: type 'libs/maine/siera-my'
- lazy: leave unchecked
- parent: leave empty
- publishable: leave unchecked
- routing: checked
- addModuleSpec: leave unchecked
- addTailwind: leave unchecked
- changeDetection: choose 'Default'
- compilationMode: choose '--'
- displayBlock: leave unchecked
- flat: checked
- importPath: leave empty
- inlineStyle: leave unchecked
- inlineTemplate: leave unchecked
- linter: choose 'eslint'
- prefix: leave empty
- projectNameAndRootFormat: choose 'as-provided'
- selector: leave empty
- setParserOptionsProject: leave unchecked
- simpleName: leave unchecked
- skipModule: leave unchecked
- skipSelector: leave unchecked
- skipTests: leave unchecked
- skipTsConfig: leave unchecked
- standalone: checked
- strict: checked
- style: choose 'scss'
- tags: type 'scope:siera,type:shell'
- unitTestRunner: choose 'jest'
- viewEncapsulation: choose '--'
