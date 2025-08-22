import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function HealthcareFramework() {
  const steps = [
    {
      number: 1,
      title: "Identify Target Population",
      description: "Define the specific rural population segment to be served",
    },
    {
      number: 2,
      title: "Assess Healthcare Needs",
      description: "Determine critical healthcare requirements and gaps",
    },
    {
      number: 3,
      title: "Design Cost-Effective Model",
      description: "Create service delivery model balancing affordability and quality",
    },
    {
      number: 4,
      title: "Establish Public-Private Partnership",
      description: "Define roles, responsibilities and resource sharing",
    },
    {
      number: 5,
      title: "Implement & Monitor",
      description: "Deploy services with continuous quality and impact assessment",
    },
  ]

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>5-Step &ldquo;Affordability-Profitability&rdquo; Healthcare Framework</CardTitle>
        <CardDescription>
          A balanced approach to providing affordable healthcare while ensuring provider sustainability
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-800 font-bold mb-2">
                {step.number}
              </div>
              <h3 className="text-center font-semibold mb-1">{step.title}</h3>
              <p className="text-center text-sm text-muted-foreground max-w-[200px]">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-4 transform translate-x-1/2">
                  <ArrowRight className="text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
