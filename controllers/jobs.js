import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  try {
    const { CityName, Technologies, CompanyName, Experience, immediatejoiner } = req.body;

    // Validate request body
    if (!CityName || !Technologies || !CompanyName || Experience === undefined || !immediatejoiner) {
      return res.status(400).json({ message: "All fields are required." });
    }


    // Create a new job
    const newJob = new Job({
      CityName,
      Technologies,
      CompanyName,
      Experience,
      immediatejoiner,
    });

    await newJob.save();

    return res.status(201).json({ message: "Job created successfully", job: newJob });
  } catch (error) {
    console.error("Error creating job:", error.message);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const geteJobs = async (req, res) => {
  try {
     
    const jobs =await  Job.find({});
    return res.status(201).json({ message: "Job fetched successfully", data: jobs });
  } catch (error) {
    console.error("Error fteching job:", error.message);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const updateJob = async (req, res) => {
    try {
      const jobId = req.params.id;
      const { CityName, Technologies, CompanyName, Experience, immediatejoiner } = req.body;
  
      // Validate request body
      if (!CityName || !Technologies || !CompanyName || Experience === undefined || !immediatejoiner) {
        return res.status(400).json({ message: "All fields are required." });
      }
  
      // Find the job by ID and update it
      const updatedJob = await Job.findByIdAndUpdate(
        jobId,
        { CityName, Technologies, CompanyName, Experience, immediatejoiner },
        { new: true } // Return the updated document
      );
  
      if (!updatedJob) {
        return res.status(404).json({ message: "Job not found." });
      }
  
      return res.status(200).json({ message: "Job updated successfully", job: updatedJob });
    } catch (error) {
      console.error("Error updating job:", error.message);
      return res.status(500).json({ message: "Server error", error: error.message});
    }
  };
  export const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    console.log(jobId)
    // Find the job by ID and delete it
    const deletedJob = await Job.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found." });
    }

    return res.status(200).json({ message: "Job deleted successfully", job: deletedJob });
  } catch (error) {
    console.error("Error deleting job:", error.message);
    return res.status(500).json({ message: "Server error", error: error.message});
}
};