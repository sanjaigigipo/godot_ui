"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function LearnAnyPOC() {
  const [topic, setTopic] = useState("")
  const [grade, setGrade] = useState("")
  const [language, setLanguage] = useState("")

  const handleGenerateGame = () => {
    console.log({ topic, grade, language })
    // Handle game generation logic here
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">LearnAny POC</h1>

        {/* Form */}
        <div className="space-y-6">
          {/* Topic Input */}
          <div className="space-y-2">
            <Label htmlFor="topic" className="text-sm font-medium text-gray-700">
              Topic
            </Label>
            <Input
              id="topic"
              type="text"
              placeholder="Enter topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Grade Dropdown */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Grade</Label>
            <Select value={grade} onValueChange={setGrade}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((gradeNum) => (
                  <SelectItem key={gradeNum} value={gradeNum.toString()}>
                    Grade {gradeNum}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Language Dropdown */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
                <SelectItem value="mr">Marathi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Generate Game Button */}
          <Button onClick={handleGenerateGame} className="w-full mt-6" disabled={!topic || !grade || !language}>
            Generate Game
          </Button>
        </div>
      </div>
    </div>
  )
}
