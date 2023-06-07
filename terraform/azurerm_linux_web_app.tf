provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "docker_app" {
  name     = "test_group"
  location = "East US"
}

resource "azurerm_service_plan" "docker_app" {
  name                = "dockerAppServicePlan"
  resource_group_name = azurerm_resource_group.docker_app.name
  location            = azurerm_resource_group.docker_app.location
  os_type             = "Linux"
  sku_name            = "P1v2"
}

resource "azurerm_linux_web_app" "docker_app" {
  name                = "node-container-azure-app-service"
  resource_group_name = azurerm_resource_group.docker_app.name
  location            = azurerm_service_plan.docker_app.location
  service_plan_id     = azurerm_service_plan.docker_app.id

  site_config {}
}