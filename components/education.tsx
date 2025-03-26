import { School, MapPin, CalendarDays, GraduationCap, BookCheck, Check } from "lucide-react"

export function Education() {
  return (
<div className="space-y-6">

        <div className="space-y-2">
            <div className="border-b border-neutral-700">
                <div className="flex items-center gap-2 mb-4">
                    <School className="h-5 w-5 text-white" />
                    <h3 className="text-xl font-semibold">Swedish Armed Forces</h3>
                </div>
                <div className="mt-1 text-md text-muted-foreground mb-2">
                    <div className="flex items-center gap-1 mb-2">
                    <BookCheck className="h-4 w-4 text-white" />
                    <span className="text-white font-bold">Major:</span>
                    </div>
                    <p>Military Service</p>
                    <span className="w-full">Field Operations & Culinary Training</span>
                </div>
                <div className="mt-1 text-md text-muted-foreground mb-2">
                    <div className="flex items-center gap-1 mb-2">
                    <GraduationCap className="h-4 w-4 text-white" />
                    <span className="text-white font-bold">Degree:</span>
                    </div>
                    <p>Diploma & Service Medal</p>
                </div>
                <div className="mt-1 text-md text-muted-foreground mb-2">
                    <div className="flex items-center gap-1 mb-2">
                    <MapPin className="h-4 w-4 text-white" />
                    <span className="text-white font-bold">Location:</span>
                    </div>
                    <p>Skövde, Sweden & Karlskrona, Sweden</p>
                </div>
                <div className="mt-1 text-md text-muted-foreground mb-2">
                    <div className="flex items-center gap-1 mb-2">
                    <Check className="h-4 w-4 text-white" />
                    <span className="text-white font-bold">Description:</span>
                    </div>
                    <p>Completed 11 months of military service at P4 Skaraborgs Regiment, including general basic training, national field exercises, and a one-month culinary training program at a naval base in southern Sweden.</p>
                </div>
                <div className="mt-1 mb-4 text-md text-muted-foreground">
                    <div className="flex items-center gap-1 mb-2">
                    <CalendarDays className="h-4 w-4 text-white" />
                    <span className="text-white font-bold">Period:</span>
                    </div>
                    <p>2009 - 2010</p>
                </div> 
            </div>
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <School className="h-5 w-5 text-white" />
                    <h3 className="text-xl font-semibold mt-4">Virginska Skolan</h3>
                </div>
                <div className="mt-1 text-md text-muted-foreground mb-2">
                    <div className="flex items-center gap-1 mb-2">
                    <BookCheck className="h-4 w-4 text-white" />
                    <span className="text-white font-bold">Major:</span>
                    </div>
                    <p>Media Communication</p>
                </div>
                <div className="mt-1 text-md text-muted-foreground mb-2">
                    <div className="flex items-center gap-1 mb-2">
                    <GraduationCap className="h-4 w-4 text-white" />
                    <span className="text-white font-bold">Degree:</span>
                    </div>
                    <p>Upper Secondary Dimploma</p>
                </div>
                <div className="mt-1 text-md text-muted-foreground mb-2">
                    <div className="flex items-center gap-1 mb-2">
                    <MapPin className="h-4 w-4 text-white" />
                    <span className="text-white font-bold">Location:</span>
                    </div>
                    <p>Örebro, Sweden</p>
                </div>
                <div className="mt-1 text-md text-muted-foreground mb-2">
                    <div className="flex items-center gap-1 mb-2">
                    <Check className="h-4 w-4 text-white" />
                    <span className="text-white font-bold">Description:</span>
                    </div>
                    <p>Studied Media Communication with a focus on Photography, Graphic Design, and Video Production. Over three years, gradually specialized in Graphic Design and Video Production.</p>
                </div>
                <div className="mt-1 text-md text-muted-foreground mb-2">
                    <div className="flex items-center gap-1 mb-2">
                    <CalendarDays className="h-4 w-4 text-white" />
                    <span className="text-white font-bold">Period:</span>
                    </div>
                    <p>2006 - 2009</p>
                </div> 
            </div>
        </div>

</div>
  )
}

