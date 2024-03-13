import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

export default function Features() {

  const features = [
    {
      title: "Prevent Mistakes",
      description: "Select exactly what you need and remove the rest with an easy to use interface. Just click on the sections you want to include and you're good to go.",
    },
    {
      title: "Cool Themes",
      description: "Want stats for your project? Want a dark theme? No problem. All you need to do is change the theme in the settings or add your own themes.",
    },
    {
      title: "Live Preview",
      description: "Instantly generate a live preview of your file. Download or share directly to you your repositories. No need to wait for a build to finish."
    }
  ];

  
  return (
    <div className="flex flex-col items-center justify-center text-white px-8 pt-0 pb-8">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-12">Core features</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (

            <div key={index} className="flex justify-center items-center p-1 rounded-lg shadow-glow" style={{ background: 'linear-gradient(135deg, #102eb1, #000000, purple)' }}>
              <Card className="bg-[#1F1F1F] w-full rounded-lg">
                <CardHeader>
                  <CheckCircleIcon className="text-green-500" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CheckCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
