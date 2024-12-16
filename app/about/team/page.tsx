import { Card } from "@/components/ui/card";
import { Medal, Radio, Music2, Wrench, Users, Music, Camera, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Michelle Eidschun",
    role: "President",
    description: "The heartbeat of The Train Station and our 'Conductor'. She brings it all together, running the day-to-day operations with passion and dedication.",
    image: "/media/team/Michelle.jpg",
    icon: Users
  },
  {
    name: "Tom Eidschun",
    role: "SGM USA Ret.",
    description: "From cooking amazing Pork BBQ to keeping The Train Station in order, Tom is our hero who gets things done. A decorated veteran who deserves your respect - be sure to shake his hand and buy him a beer!",
    image: "/media/team/Tom.jpg",
    icon: Medal
  },
  {
    name: "Jeff Butcher",
    role: "Bar Manager",
    description: "A voice for radio and a heart for service. Veteran and dedicated volunteer for several Veterans Non-Profits.",
    image: "/media/team/jeff.jpg",
    icon: Radio
  },
  {
    name: "Wes Stanley",
    role: "Social Media and Marketing Manager",
    description: "Our remote Swiss Army Knife from Virginia. USAF veteran who keeps our online presence sharp and occasionally graces us with in-person visits.",
    image: "/media/team/wes.jpg",
    icon: Wrench
  },
  {
    name: "Tim Branstetter",
    role: "Kentucky Unplugged Founder",
    description: "Founder of Branstetter-Jarvis Music Management. Curates our Kentucky Unplugged series, showcasing the best of Kentucky and Appalachian artists.",
    image: "/media/team/tim.jpg",
    icon: Music
  },
  {
    name: "The Darkroom Project",
    role: "Photography Team",
    description: "Our talented in-house photography team capturing the magic of every performance and event at The Train Station. Their artistic vision helps us preserve and share the incredible moments that happen here.",
    image: "/media/team/IMG_0758.jpg",
    icon: Camera
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals who make The Train Station a home for Appalachian music
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const Icon = member.icon;
              return (
                <Card key={member.name} className="p-6 space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                    </div>
                    <p className="font-medium text-primary">{member.role}</p>
                    <p className="text-muted-foreground">{member.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Booking Team Section */}
          <div className="pt-16">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Booking Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get in touch with our booking team to bring your music to The Train Station
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Michelle Eidschun</h3>
                  </div>
                  <p className="font-medium text-primary">General Booking</p>
                  <a 
                    href="mailto:booking@thetrainstationcorbin.com" 
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    booking@thetrainstationcorbin.com
                  </a>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Tim Branstetter</h3>
                  </div>
                  <p className="font-medium text-primary">Kentucky Unplugged Booking</p>
                  <a 
                    href="mailto:tim@kentuckyunplugged.com" 
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    tim@kentuckyunplugged.com
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}