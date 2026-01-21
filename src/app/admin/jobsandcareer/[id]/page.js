"use client";

import { useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function JobsAndCareerForm() {
  const { id: destinationId } = useParams();
  console.log(destinationId);
  const [form, setForm] = useState({
    partTimeRules: "",
    partTimeSectors: "",
    avgWage: "",
    internshipInfo: "",
    postStudyWork: "",
    prPathways: "",
    demandJobs: "",
  });

  const resetForm = () => {
    setForm({
      partTimeRules: "",
      partTimeSectors: "",
      avgWage: "",
      internshipInfo: "",
      postStudyWork: "",
      prPathways: "",
      demandJobs: "",
    });
  };

  const jobsMutation = useMutation({
    mutationFn: async(payload) => {
        const res = await fetch("/api/admin/jobsandcareer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              destinationId,
              ...payload,
            }),
          });
    
          const data = await res.json();
    
          if (!data.success) {
            throw new Error(data.message || "Save failed");
          }
          return data;
    },
    onSuccess: () => {
        toast.success("Info Added Successfully");
        resetForm();
        
      },
      onError: (err) => {
        toast.error(err.message || "Delete failed");
      },
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    jobsMutation.mutate(form);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6 p-6">
      <h1 className="text-2xl font-bold">Jobs & Career</h1>

      <Textarea
        label="Part-time Work Rules"
        name="partTimeRules"
        value={form.partTimeRules}
        onChange={handleChange}
        placeholder="Allowed hours, restrictions, student visa rules"
      />

      <Textarea
        label="Part-time Job Sectors"
        name="partTimeSectors"
        value={form.partTimeSectors}
        onChange={handleChange}
        placeholder="Hospitality, retail, IT, warehouses, etc."
      />

      <Textarea
        label="Average Wage"
        name="avgWage"
        value={form.avgWage}
        onChange={handleChange}
        placeholder="Hourly pay range, minimum wage"
      />

      <Textarea
        label="Internship Opportunities"
        name="internshipInfo"
        value={form.internshipInfo}
        onChange={handleChange}
        placeholder="Internships during study, CPT/OPT equivalents"
      />

      <Textarea
        label="Post-study Work Visa"
        name="postStudyWork"
        value={form.postStudyWork}
        onChange={handleChange}
        placeholder="PSW duration, eligibility, extensions"
      />

      <Textarea
        label="PR & Long-term Pathways"
        name="prPathways"
        value={form.prPathways}
        onChange={handleChange}
        placeholder="PR options, skilled migration, points-based systems"
      />

      <Textarea
        label="In-demand Jobs"
        name="demandJobs"
        value={form.demandJobs}
        onChange={handleChange}
        placeholder="IT, healthcare, engineering, construction, etc."
      />

      <button
        type="submit"
        disabled={jobsMutation.isPending}
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
      >
        {jobsMutation.isPending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}

/* ----------------- Reusable Textarea ----------------- */

function Textarea({ label, ...props }) {
  return (
    <div className="space-y-2">
      <label className="font-medium">{label}</label>
      <textarea
        {...props}
        rows={4}
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
