import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Feather,
  Star,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Edit3,
  Send,
  Target,
  Building2,
  Sparkles,
  PenTool,
  Code,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WebQuillWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-amber-500/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/wq.png"
              alt="WebQuill Agency"
              width={40}
              height={40}
              className="h-8 w-auto object-contain drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-300 hover:text-amber-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(245,158,11,0.7)]"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-amber-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(245,158,11,0.7)]"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-300 hover:text-amber-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(245,158,11,0.7)]"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-amber-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(245,158,11,0.7)]"
            >
              Contact
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-semibold drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.8)] transition-all">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="text-amber-400 border-amber-400/50 bg-amber-400/10 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                >
                  Crafting Digital Excellence
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Writing Your Website{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                    To A Better Note
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  At WebQuill, we don't just build websites - we craft digital stories that convert. From elegant
                  ecommerce platforms to compelling copy that sells, we pen your success with precision and artistry.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-semibold drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.8)] transition-all"
                >
                  Begin Your Story
                  <Feather className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400 hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all bg-transparent"
                >
                  View Our Work
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-amber-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.7)]" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-amber-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.7)]" />
                  <span>Professional Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-amber-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.7)]" />
                  <span>Ongoing Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900/50 backdrop-blur border border-amber-500/20 rounded-2xl shadow-2xl p-8 transform rotate-2 drop-shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                {/* Mockup Content */}
                <div className="bg-white rounded-lg p-6 space-y-4">
                  {/* Browser Bar */}
                  <div className="flex items-center space-x-2 pb-4 border-b border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded px-3 py-1 text-xs text-gray-600">yourstore.com</div>
                  </div>

                  {/* Website Content */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="w-20 h-4 bg-gray-800 rounded"></div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-12 h-3 bg-gray-200 rounded"></div>
                        <div className="w-12 h-3 bg-gray-200 rounded"></div>
                        <div className="w-16 h-5 bg-amber-400 rounded"></div>
                      </div>
                    </div>

                    {/* Hero Section */}
                    <div className="text-center space-y-3 py-6">
                      <div className="w-3/4 h-6 bg-gray-800 rounded mx-auto"></div>
                      <div className="w-1/2 h-3 bg-gray-400 rounded mx-auto"></div>
                      <div className="w-24 h-6 bg-amber-400 rounded mx-auto"></div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="space-y-1">
                          <div className="w-full h-12 bg-gray-200 rounded"></div>
                          <div className="w-full h-1.5 bg-gray-300 rounded"></div>
                          <div className="w-3/4 h-1.5 bg-gray-300 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Responsive Indicators */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 space-y-2">
                  <div className="bg-amber-500 p-2 rounded-lg drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                    <Monitor className="h-4 w-4 text-black" />
                  </div>
                  <div className="bg-orange-500 p-2 rounded-lg drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                    <Tablet className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-red-500 p-2 rounded-lg drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                    <Smartphone className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-xl shadow-lg drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                <div className="flex items-center space-x-2">
                  <PenTool className="h-5 w-5 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                  <span className="font-semibold">Handcrafted Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="outline"
              className="text-orange-400 border-orange-400/50 bg-orange-400/10 drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]"
            >
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">The Complete Digital Manuscript</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every great story needs the right words, design, and strategy. We craft complete digital experiences that
              turn your vision into a compelling narrative that converts visitors into loyal customers.
            </p>
          </div>

          {/* Main Package Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur border border-amber-500/30 hover:border-amber-400/50 hover:drop-shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-400/30 rounded-xl flex items-center justify-center mb-6 mx-auto drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                  <Feather className="h-8 w-8 text-amber-400" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl text-white mb-4">
                  Your Digital Story, Perfectly Penned
                </CardTitle>
                <CardDescription className="text-lg text-gray-300 max-w-2xl mx-auto">
                  From the first draft to the final flourish, we write your online success story with three essential
                  chapters: stunning design, compelling copy, and strategic marketing.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Service Details */}
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 backdrop-blur border border-amber-500/20 hover:border-amber-400/50 hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-400/30 rounded-lg flex items-center justify-center mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                  <Code className="h-6 w-6 text-amber-400" />
                </div>
                <CardTitle className="text-white text-xl">Custom Ecommerce Development</CardTitle>
                <CardDescription className="text-gray-400">
                  We architect digital storefronts that tell your brand's story while delivering seamless shopping
                  experiences on WordPress + WooCommerce.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-amber-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.7)] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-300">Bespoke Visual Narratives:</strong> Custom designs that capture
                      your brand's essence and build instant trust
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-amber-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.7)] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-300">Responsive Storytelling:</strong> Flawless experiences across
                      every device and screen size
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-amber-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.7)] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-300">Intuitive Content Management:</strong> Simple, elegant systems
                      for managing your digital catalog
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-amber-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.7)] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-300">Secure Transaction Flow:</strong> Seamless Stripe and PayPal
                      integration for confident purchases
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur border border-orange-500/20 hover:border-orange-400/50 hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-400/30 rounded-lg flex items-center justify-center mb-4 drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                  <Edit3 className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white text-xl">Masterful Copy & Brand Storytelling</CardTitle>
                <CardDescription className="text-gray-400">
                  Every word matters. We craft compelling narratives that transform casual browsers into devoted
                  customers through the art of persuasive writing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.7)] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-300">Captivating Core Pages:</strong> Homepage, About, and Contact
                      pages that tell your unique story
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.7)] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-300">Conversion-Crafted Descriptions:</strong> Product copy that
                      highlights benefits and inspires action
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.7)] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-300">Unified Brand Voice:</strong> Consistent, authentic messaging
                      that resonates with your audience
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur border border-red-500/20 hover:border-red-400/50 hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-400/30 rounded-lg flex items-center justify-center mb-4 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                  <Send className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-white text-xl">Strategic Email Storytelling</CardTitle>
                <CardDescription className="text-gray-400">
                  Your subscriber list is your most valuable audience. We craft email experiences that nurture
                  relationships and drive lasting engagement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.7)] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-300">Platform Mastery:</strong> Complete setup and optimization on
                      Mailchimp or MailerLite
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.7)] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-300">Welcome Story Series:</strong> A thoughtfully crafted 3-part
                      email journey for new subscribers
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.7)] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-300">Branded Newsletter Canvas:</strong> Beautiful templates that
                      reflect your brand's personality
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Who We Write For */}
          <div className="mt-20">
            <div className="text-center space-y-4 mb-12">
              <Badge
                variant="outline"
                className="text-emerald-400 border-emerald-400/50 bg-emerald-400/10 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]"
              >
                Our Clients
              </Badge>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">Stories We Love to Tell</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We specialize in writing digital success stories for visionaries who understand the power of great
                storytelling.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-gray-900/30 backdrop-blur border border-emerald-500/20 hover:border-emerald-400/50 hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-400/30 rounded-lg flex items-center justify-center mb-4 mx-auto drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                    <Target className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Ambitious Startups</h4>
                  <p className="text-gray-400 text-sm">
                    First-time entrepreneurs ready to pen their inaugural chapter in the digital marketplace
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 backdrop-blur border border-yellow-500/20 hover:border-yellow-400/50 hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.2)] transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 rounded-lg flex items-center justify-center mb-4 mx-auto drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                    <Building2 className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Established Businesses</h4>
                  <p className="text-gray-400 text-sm">
                    Local companies ready to rewrite their story for the digital age and expand their reach
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/30 backdrop-blur border border-purple-500/20 hover:border-purple-400/50 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 rounded-lg flex items-center justify-center mb-4 mx-auto drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                    <Sparkles className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Creative Entrepreneurs</h4>
                  <p className="text-gray-400 text-sm">
                    Artists, creators, and innovators who want their online presence to reflect their unique vision
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-1 gap-12 items-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="text-amber-400 border-amber-400/50 bg-amber-400/10 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]"
              >
                About WebQuill
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Masters of Digital Storytelling</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At WebQuill, we believe every business has a unique story worth telling. Our team of digital artisans
                combines the precision of modern web development with the timeless art of compelling storytelling. We
                don't just write code - we craft experiences that resonate, engage, and convert.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.7)]" />
                  <span className="text-gray-300">Specialized in narrative-driven ecommerce design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.7)]" />
                  <span className="text-gray-300">Expert copywriters who understand conversion psychology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.7)]" />
                  <span className="text-gray-300">Strategic email marketing that builds lasting relationships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.7)]" />
                  <span className="text-gray-300">Dedicated to writing your success story, chapter by chapter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(249,115,22,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="outline"
              className="text-orange-400 border-orange-400/50 bg-orange-400/10 drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]"
            >
              Our Portfolio
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Tales of Digital Success</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every project is a new story waiting to be told. Here are some of our favorite chapters we've written for
              our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 backdrop-blur border border-amber-500/20 hover:border-amber-400/50 hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Artisan fashion boutique"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                  Fashion Store
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-white">Artisan Fashion Boutique</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A complete brand narrative with custom ecommerce design, compelling product stories, and email
                  sequences that build community.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-semibold drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">
                    View Project
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400 hover:text-amber-400 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur border border-orange-500/20 hover:border-orange-400/50 hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Wellness brand story"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                  Wellness Brand
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-white">Holistic Wellness Brand</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Crafted a healing narrative with mindful design, wellness-focused copy, and nurturing email
                  experiences.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-semibold drop-shadow-[0_0_5px_rgba(249,115,22,0.5)]">
                    View Project
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400 hover:text-orange-400 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur border border-red-500/20 hover:border-red-400/50 hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Artisan craft story"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                  Handmade Crafts
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-white">Handmade Craft Studio</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Told the story of traditional craftsmanship through modern design, authentic copy, and community-
                  building emails.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 font-semibold drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">
                    View Project
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400 hover:text-red-400 transition-colors" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="outline"
              className="text-emerald-400 border-emerald-400/50 bg-emerald-400/10 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]"
            >
              Client Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">What Our Clients Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The best stories are told by those who lived them. Here's what our clients have to say about their journey
              with WebQuill.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 backdrop-blur border border-amber-500/20 hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_5px_rgba(234,179,8,0.7)]"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "WebQuill didn't just build us a website - they crafted our entire digital story. The copy perfectly
                  captures our brand voice, and our customers love the shopping experience."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-black font-semibold drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah M.</div>
                    <div className="text-sm text-gray-400">Boutique Owner</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur border border-orange-500/20 hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_5px_rgba(234,179,8,0.7)]"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "The attention to detail in both design and copy is incredible. They understood our vision and brought
                  it to life in ways we never imagined. Our email campaigns are performing amazingly well."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-white">Marcus R.</div>
                    <div className="text-sm text-gray-400">Wellness Entrepreneur</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur border border-red-500/20 hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_5px_rgba(234,179,8,0.7)]"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Working with WebQuill felt like having a dedicated storytelling partner. They took our craft business
                  and turned it into a compelling online narrative that our customers connect with emotionally."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                    E
                  </div>
                  <div>
                    <div className="font-semibold text-white">Elena K.</div>
                    <div className="text-sm text-gray-400">Artisan Crafter</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="outline"
              className="text-amber-400 border-amber-400/50 bg-amber-400/10 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]"
            >
              Get Started
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every great story begins with a single word. Let's start writing yours together and create a digital
              narrative that captivates and converts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-400/30 rounded-lg flex items-center justify-center flex-shrink-0 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                    <Mail className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Email Us</h3>
                    <p className="text-amber-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">hello@webquill.agency</p>
                    <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-400/30 rounded-lg flex items-center justify-center flex-shrink-0 drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                    <Phone className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Call Us</h3>
                    <p className="text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.5)]">(555) 123-4567</p>
                    <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-400/30 rounded-lg flex items-center justify-center flex-shrink-0 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                    <MapPin className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Visit Our Studio</h3>
                    <p className="text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">
                      123 Creative Ave, Suite 100
                    </p>
                    <p className="text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/20 p-6 rounded-xl backdrop-blur">
                <h3 className="font-semibold text-lg mb-2 text-white">Free Consultation</h3>
                <p className="text-gray-300 text-sm">
                  Schedule a complimentary 30-minute consultation where we'll discuss your vision and explore how we can
                  craft your perfect digital story together.
                </p>
              </div>
            </div>

            <Card className="bg-gray-900/50 backdrop-blur border border-amber-500/20 drop-shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <CardHeader>
                <CardTitle className="text-white">Start Your Project</CardTitle>
                <CardDescription className="text-gray-400">
                  Tell us about your vision and we'll craft a response within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-black/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-black/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-black/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone</label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="bg-black/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Project Type</label>
                  <select className="w-full p-2 bg-black/50 border border-gray-600 text-white rounded-md focus:border-amber-400 focus:ring-amber-400/20 focus:outline-none">
                    <option>New Business Launch</option>
                    <option>Established Business Expansion</option>
                    <option>Creative/Artistic Venture</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Tell us about your project</label>
                  <Textarea
                    placeholder="What's your vision? What story do you want to tell? What makes your business unique?"
                    className="min-h-[100px] bg-black/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-semibold drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.8)] transition-all">
                  Start Your Story
                  <Feather className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/wq.png"
                  alt="WebQuill Agency"
                  width={40}
                  height={40}
                  className="h-8 w-auto object-contain drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                />
              </div>
              <p className="text-gray-400">
                Crafting compelling digital stories that transform businesses through the art of web development,
                strategic copywriting, and narrative-driven marketing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-amber-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(245,158,11,0.7)]"
                  >
                    Ecommerce Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(249,115,22,0.7)]"
                  >
                    Brand Copywriting
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-red-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(239,68,68,0.7)]"
                  >
                    Email Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(16,185,129,0.7)]"
                  >
                    Digital Strategy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-amber-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(245,158,11,0.7)]"
                  >
                    About WebQuill
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(249,115,22,0.7)]"
                  >
                    Our Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-red-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(239,68,68,0.7)]"
                  >
                    Client Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors hover:drop-shadow-[0_0_5px_rgba(16,185,129,0.7)]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-amber-400 transition-colors">hello@webquill.agency</li>
                <li className="hover:text-orange-400 transition-colors">(555) 123-4567</li>
                <li className="hover:text-red-400 transition-colors">123 Creative Ave, Suite 100</li>
                <li className="hover:text-emerald-400 transition-colors">New York, NY 10001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} WebQuill Agency. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors text-sm hover:drop-shadow-[0_0_5px_rgba(245,158,11,0.7)]"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors text-sm hover:drop-shadow-[0_0_5px_rgba(249,115,22,0.7)]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
