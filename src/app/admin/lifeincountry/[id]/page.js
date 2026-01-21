"use client";

import { useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LifeInCountryForm() {
  const { id: destinationId } = useParams();

  const [form, setForm] = useState({
    livingCost: "",
    accommodation: "",
    insurance: "",
    transportation: "",
    foodLifestyle: "",
    safety: "",
    workLifeBalance: "",
  });

  const resetForm = () => {
    setForm({
      livingCost: "",
      accommodation: "",
      insurance: "",
      transportation: "",
      foodLifestyle: "",
      safety: "",
      workLifeBalance: "",
    })
  }

  const lifeMutation = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/admin/lifeincountry", {
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
    lifeMutation.mutate(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto space-y-6 p-6"
    >
      <h1 className="text-2xl font-bold">Life in Country</h1>

      <Textarea
        label="Living Cost"
        name="livingCost"
        value={form.livingCost}
        onChange={handleChange}
        placeholder="Average monthly expenses, currency, etc. (One info per Line)"
      />

      <Textarea
        label="Accommodation"
        name="accommodation"
        value={form.accommodation}
        onChange={handleChange}
        placeholder="Dorms, shared apartments, rent range (One info per Line)"
      />

      <Textarea
        label="Insurance"
        name="insurance"
        value={form.insurance}
        onChange={handleChange}
        placeholder="Health insurance requirements (One info per Line)"
      />

      <Textarea
        label="Transportation"
        name="transportation"
        value={form.transportation}
        onChange={handleChange}
        placeholder="Public transport, passes, costs (One info per Line)"
      />

      <Textarea
        label="Food & Lifestyle"
        name="foodLifestyle"
        value={form.foodLifestyle}
        onChange={handleChange}
        placeholder="Food habits, vegetarian/halal options (One info per Line)"
      />

      <Textarea
        label="Safety"
        name="safety"
        value={form.safety}
        onChange={handleChange}
        placeholder="Safety, laws, student-friendly environment (One info per Line)"
      />

      <Textarea
        label="Work-Life Balance"
        name="workLifeBalance"
        value={form.workLifeBalance}
        onChange={handleChange}
        placeholder="Student workload, culture (One info per Line)"
      />

      <button
        type="submit"
        disabled={lifeMutation.isPending}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
      >
        {lifeMutation.isPending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}

/* ----------------- Reusable Textarea ----------------- */

function Textarea({
  label,
  ...props
}) {
  return (
    <div className="space-y-2">
      <label className="font-medium">{label}</label>
      <textarea
        {...props}
        rows={4}
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
