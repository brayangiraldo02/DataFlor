import express from "express";
import cors from "cors";
import * as flowerShop from "../controller/flowershops.controller.js"
import * as users from "../controller/users.controller.js"
import * as providers from "../controller/providers.controller.js"

const router = express.Router();

// Main route
router.get("/", (req, res) => {
  res.status(200).json({ 
    Welcome_message: "Welcome to the DataFlor backend!",
    flowerShops: {
      Access: "Only admins can access this routes",
      allFlowerShops: "GET /flower-shops",
      flowerShopById: "GET /flower-shops/:id",
      flowerShopByName: "GET /flower-shops/name/:name",
      flowerShopByAddress: "GET /flower-shops/address/:address",
      flowerShopByPhone: "GET /flower-shops/phone/:phone",
      flowerShopByState: "GET /flower-shops/state/:state",
      createFlowerShop: "POST /flower-shops/create",
      updateFlowerShopById: "PUT /flower-shops/update/id/:id",
      updateFlowerShopByFullname: "PUT /flower-shops/update/fullname/:name"
    },
    users: {
      Access: "The administrator can access all routes and the owner can access some routes.",
      allUsers: "GET /users",
      userById: "GET /users/:id",
      userByUsername: "GET /users/username/:name",
      userByFullName: "GET /users/fullName/:fullName",
      userByPhone: "GET /users/phone/:phone",
      userByRole: "GET /users/role/:role",
      userByIdflowerShops: "GET /users/idflowerShops/:idflowerShops",
      userByState: "GET /users/state/:state",
      createUser: "POST /users/create",
      updateUserById: "PUT /users/update/id/:id",
      updateUserByUsername: "PUT /users/update/username/:name"
    },
    providers: {
      Access: "All users can access these routes except PUTS and POST types.",
      allProviders: "GET /providers",
      providerById: "GET /providers/:id",
      providerByName: "GET /providers/name/:name",
      providerByPhone: "GET /providers/phone/:phone",
      providerByAddress: "GET /providers/address/:address",
      providerByState: "GET /providers/state/:state",
      createProvider: "POST /providers/create",
      updateProviderById: "PUT /providers/update/id/:id",
      updateProviderByFullname: "PUT /providers/update/fullname/:name"

    },
    images: {

    },
    inventory: {

    },
    products: {

    }
  });
});

//----------------------------------------------------------------------------------------------
// Routes of flower shops

// Obtain all flower shops
router.get("/flower-shops", flowerShop.getFlowerShops)

// Obtain a flower shop by id
router.get("/flower-shops/:id", flowerShop.getFlowerShopById)

// Obtain a flower shop by name
router.get("/flower-shops/name/:name", flowerShop.getFlowerShopByName)

// Obtain a flower shop by address
router.get("/flower-shops/address/:address", flowerShop.getFlowerShopByAddress)

// Obtain a flower shop by phone
router.get("/flower-shops/phone/:phone", flowerShop.getFlowerShopByPhone)

// Obtain a flower shop by state
router.get("/flower-shops/state/:state", flowerShop.getFlowerShopByState)

// Create a new flower shop
router.post("/flower-shops/create", flowerShop.createFlowerShop)

// Update a flower shop by id
router.put("/flower-shops/update/id/:id", flowerShop.updateFlowerShopById)

// Update a flower shop by fullname
router.put("/flower-shops/update/fullname/:name")

//----------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------
//User routes

// Obtain all users
router.get("/users", users.getUsers)

// Obtain a user by id
router.get("/users/:id", users.getUsersById)

// Obtain a user by username
router.get("/users/username/:name", users.getUsersByUsername)

// Obtain a user by fullName
router.get("/users/fullName/:fullname", users.getUsersByFullName)

// Obtain a user by phone
router.get("/users/phone/:phone", users.getUsersByPhone)

// Obtain a user by role
router.get("/users/role/:role", users.getUsersByRole)

// Obtain a user by idflowerShops
router.get("/users/idflowerShops/:idflowerShops", users.getUsersByIdflowerShops)

// Obtain a user by state
router.get("/users/state/:state", users.getUsersByState)

// Create a new user
router.post("/users/create", users.createUser)

// Update a user by id
router.put("/users/update/id/:id", users.updateUserById)

// Update a user by username
router.put("/users/update/username/:name", users.updateUserByUsername)

//----------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------
//Provider routes

// Obtain all providers
router.get("/providers", providers.getProviders)

// Obtain a provider by id
router.get("/providers/:id", providers.getProviderById)

// Obtain a provider by name
router.get("/providers/name/:name", providers.getProviderByName)

// Obtain a provider by phone
router.get("/providers/phone/:phone", providers.getProviderByPhone)

// Obtain a provider by address
router.get("/providers/address/:address", providers.getProviderByAddress)

// Obtain a provider by state
router.get("/providers/state/:state", providers.getProviderByState)

// Create a new provider
router.post("/providers/create", providers.createProvider)

// Update a provider by id
router.put("/providers/update/id/:id", providers.updateProviderById)

// Update a provider by fullname
router.put("/providers/update/fullname/:name", providers.updateProviderByName)

//----------------------------------------------------------------------------------------------

export default router;