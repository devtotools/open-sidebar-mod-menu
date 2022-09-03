# Open sidebar mod menu
Automatically open the Mod menu on DEV (*or any Forem community*).

> **Note**
>
> This script was created for [dev.to](https://dev.to) but can work with others Forems community.

## How to install it ?

1. Install **[Tampermonkey](https://www.tampermonkey.net/)** or similar extension which enables the browser to run Userscripts.
2. Copy the code in *[AutoOpenSidebarMenu.user.js](AutoOpenSidebarMenu.user.js)* as a **Tampermonkey** script. 
3. Activate the script.

### Already have Tampermonkey or alternative ?

| :electric_plug: | [Click here to install the script →](https://github.com/devtotools/open-devto-panel-sidebar-mod/raw/main/AutoOpenSidebarModDEV.user.js) |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|


## Sources

[`function toggleModActionsMenu()` in the code source of Forem](https://github.com/forem/forem/blob/main/app/javascript/actionsPanel/initializeActionsPanelToggle.js#L19)
