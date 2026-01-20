// components/SalaryComparison.tsx


import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function SalaryComparison({ data }) {
  return (
    <AnimatedSection animation="fade-up" delay={0.1}>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm">
          <thead>
            <tr className="bg-gradient-to-r from-red-50 to-blue-50">
              <th className="text-left p-6 font-semibold text-gray-900">Sector</th>
              <th className="text-left p-6 font-semibold text-gray-900">Entry Level</th>
              <th className="text-left p-6 font-semibold text-gray-900">Experienced (2-3 yrs)</th>
              <th className="text-left p-6 font-semibold text-gray-900">Senior (5+ yrs)</th>
              <th className="text-left p-6 font-semibold text-gray-900">Common Benefits</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-300">
                <td className="p-6">
                  <div className="font-semibold text-gray-900">{row.sector}</div>
                </td>
                <td className="p-6">
                  <div className="text-lg font-bold text-red-600">{row.entryLevel}</div>
                  <div className="text-sm text-gray-500">per month</div>
                </td>
                <td className="p-6">
                  <div className="text-lg font-bold text-blue-600">{row.experienced}</div>
                  <div className="text-sm text-gray-500">per month</div>
                </td>
                <td className="p-6">
                  <div className="text-lg font-bold text-green-600">{row.senior}</div>
                  <div className="text-sm text-gray-500">per month</div>
                </td>
                <td className="p-6">
                  <ul className="space-y-1">
                    {row.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Conversion Note */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-sm text-gray-600 text-center">
            <span className="font-semibold">Note:</span> ¥100,000 ≈ $700 USD (approx. exchange rate) • Salaries vary by region and employer
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}