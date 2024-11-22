import Customer from "../models/ApplyJobs.js";

export const newCustomer = async (req, res) => {
  try {
    const { 
      CustomerName, 
      email, 
      phone, 
      Technologies, 
      CityName, 
      CompanyName, 
      Experience, 
      immediatejoiner, 
      Location 
    } = req.body;

    // Validate required fields
    if (!CustomerName || !email || !phone || !Technologies || !CityName || !CompanyName || !Experience || !immediatejoiner) {
      return res.status(400).json({ error: "All required fields must be provided." });
    }

    // Create a new customer instance
    const customer = new Customer({
      CustomerName,
      email,
      phone,
      Technologies,
      CityName,
      CompanyName,
      Experience,
      immediatejoiner,
      Location: Location || "", // Optional
    });

    // Save the customer to the database
    const savedCustomer = await customer.save();

    // Send a success response
    res.status(201).json({
      message: " created successfully",
      customer: savedCustomer,
    });
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "An error occurred while creating the customer." });
  }
};

export const getAppliedJobs = async (req, res) => {
    try {
       
      const jobs =await  Customer.find({});
      return res.status(201).json({ message: " fetched successfully", data: jobs });
    } catch (error) {
      console.error("Error fteching:", error.message);
      return res.status(500).json({ message: "Server error", error: error.message });
    }
  };