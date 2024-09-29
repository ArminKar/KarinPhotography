"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Facebook } from "lucide-react"
import { useState } from "react"

const photos = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Kalnų peizažas" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Žmogaus portretas" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Miesto panorama naktį" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Gėlės stambiu planu" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Paplūdimio vaizdas iš oro" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Liūto nuotrauka" },
]

export default function PhotographyPage() {
  const [activeSection, setActiveSection] = useState("galerija")

  const renderContent = () => {
    switch (activeSection) {
      case "apie":
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">Apie mane</h2>
            <p className="text-lg mb-4 text-gray-200">
              Esu aistringas fotografas su daugiau nei 10 metų patirtimi, įamžinantis gražiausias gyvenimo akimirkas. Mano darbai orientuoti į peizažo, portreto ir laukinės gamtos fotografiją.
            </p>
            <p className="text-lg text-gray-200">
              Kai nesu už fotoaparato, mane galima rasti tyrinėjantį naujas vietas, studijuojantį šviesą ir kompoziciją arba redaguojantį naujausius kadrus iki tobulumo.
            </p>
          </div>
        )
      case "kainos":
        return (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">Kainos</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Portreto sesija: 200 € / valanda</li>
              <li>Vestuvių fotografija: nuo 1500 €</li>
              <li>Renginių fotografija: 150 € / valanda</li>
              <li>Komercinė fotografija: Individualūs pasiūlymai</li>
            </ul>
            <p className="mt-4 text-lg text-gray-200">
              Visi paketai apima profesionalų redagavimą ir aukštos raiškos skaitmeninius failus. Susisiekite su manimi dėl individualaus pasiūlymo, pritaikyto jūsų poreikiams.
            </p>
          </div>
        )
      case "galerija":
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card key={index} className="overflow-hidden bg-black/40 border-gray-700">
                <CardContent className="p-0">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-animation">
      <div className="min-h-screen bg-black/30 backdrop-blur-sm">
        <header className="w-full bg-header-image bg-cover bg-center mb-12">
          <div className="bg-black/50 backdrop-blur-sm py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4 text-white text-center">Mano fotografijos portfolio</h1>
              <p className="text-xl mb-6 text-gray-200 text-center">
                Įamžinu akimirkas ir prisiminimus per objektyvą
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <nav className="mb-8">
            <ul className="flex justify-center space-x-4">
              {[
                { id: "galerija", label: "Galerija" },
                { id: "apie", label: "Apie mane" },
                { id: "kainos", label: "Kainos" }
              ].map((section) => (
                <li key={section.id}>
                  <Button
                    variant={activeSection === section.id ? "default" : "outline"}
                    onClick={() => setActiveSection(section.id)}
                    className={`capitalize ${activeSection === section.id ? 'bg-white/20 text-white' : 'bg-black/30 text-gray-200 hover:bg-white/20 hover:text-white'}`}
                  >
                    {section.label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline" size="sm" className="bg-black/30 text-gray-200 hover:bg-white/20 hover:text-white">
              <Instagram className="mr-2 h-4 w-4" />
              Sekti Instagram
            </Button>
            <Button variant="outline" size="sm" className="bg-black/30 text-gray-200 hover:bg-white/20 hover:text-white">
              <Facebook className="mr-2 h-4 w-4" />
              Sekti Facebook
            </Button>
          </div>

          <main className="bg-black/50 text-white rounded-lg p-6 shadow-lg backdrop-blur-sm">
            {renderContent()}
          </main>

          <footer className="mt-12 text-center text-gray-300">
            <p>&copy; 2023 Mano fotografija. Visos teisės saugomos.</p>
          </footer>
        </div>
      </div>
    </div>
  )
}