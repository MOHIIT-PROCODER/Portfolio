import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ✅ ROUTE
router.post("/send/mail", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    await sendEmail({
      name,
      email,
      subject: "New Contact Message",
      message,
    });

    res.status(200).json({
      success: true,
      message: "Mail sent successfully",
    });

  } catch (error) {
    next(error);
  }
});


// ✅ use router AFTER route
app.use(router);

// ✅ error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message
  });
});


// ✅ listen must be last
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});