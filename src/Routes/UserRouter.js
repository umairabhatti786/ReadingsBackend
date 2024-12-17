const { PostAddress } = require('../Controllers/AddressesController')
const { SendBookRequest } = require('../Controllers/BookRequest')
const { getHomePage } = require('../Controllers/HomePage')
const { AddPaymentMethod, GetPaymentMethod } = require('../Controllers/PaymentMethodController')
const { Signup, Login, EditProfile } = require('../Controllers/UserController')
const {express}=require('../Db/Config')
const verifyToken = require('../MiddleWares/AuthorizationMiddlewre')
const router=express.Router()

router.route("/signup").post(Signup)
router.route("/login").post(Login)
router.route("/editProfile").put(verifyToken,EditProfile)
router.route("/addPaymentMethod").post(verifyToken,AddPaymentMethod)
router.route("/getPaymentMethod").get(verifyToken,GetPaymentMethod)
router.route("/homePage").get(getHomePage)
router.route("/bookRequest").post(SendBookRequest)
router.route("/addresses").post(verifyToken,PostAddress)

module.exports=router
