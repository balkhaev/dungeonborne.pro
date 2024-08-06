"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Heading from "@tiptap/extension-heading"
import Paragraph from "@tiptap/extension-paragraph"
import Text from "@tiptap/extension-text"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import "./editor.css"
import { Card } from "@/components/ui/card"

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, Paragraph, Text, Heading],
    content: "<p>Hello World! 🌎️</p>",
    immediatelyRender: false,
  })

  const onHeadingChange = (value: any) => {
    editor
      ?.chain()
      .focus()
      .setHeading({ level: +value as any })
      .run()
  }

  return (
    <div>
      <div className="toolbar">
        <Select onValueChange={onHeadingChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Заголовки" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">Заголовок 1</SelectItem>
              <SelectItem value="2">Заголовок 2</SelectItem>
              <SelectItem value="3">Заголовок 3</SelectItem>
              <SelectItem value="4">Заголовок 4</SelectItem>
              <SelectItem value="5">Заголовок 5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Card className="rounded-sm border-muted">
        <EditorContent editor={editor} className="p-4" />
      </Card>
    </div>
  )
}
