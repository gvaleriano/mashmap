"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

// Esquema de validação com números positivos e mensagem de erro personalizada
const formSchema = z.object({
  cep: z
    .string()
    .min(1, "Os valores não estão no padrão para o cálculo ou o campo está vazio.")
    .refine(value => !isNaN(Number(value)) && Number(value) > 0, {
      message: "Os valores não estão no padrão para o cálculo ou o campo está vazio.",
    })
    .transform(value => Number(value)),

  cidade: z
    .string()
    .min(1, "Os valores não estão no padrão para o cálculo ou o campo está vazio.")
    .refine(value => !isNaN(Number(value)) && Number(value) > 0, {
      message: "Os valores não estão no padrão para o cálculo ou o campo está vazio.",
    })
    .transform(value => Number(value)),
    
  tipoExame: z.string({
    required_error: "Selecione um tipo de exame.",
  })
})

export function LocalizacaoForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { cep, cidade, tipoExame } = values;
  
    console.log(cep, cidade, tipoExame)
  }

  return (
    <div className="w-full p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo CEP */}
          <FormField
            control={form.control}
            name="cep"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="CEP"
                    {...field}
                    value={field.value ?? ""}
                    onChange={e => field.onChange(e.target.value)}
                    min="1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo cidade */}
          <FormField
            control={form.control}
            name="cidade"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Cidade"
                    {...field}
                    value={field.value ?? ""}
                    onChange={e => field.onChange(e.target.value)}
                    min="1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo Tipo exame */}
          <FormField
            control={form.control}
            name="tipoExame"
            render={({ field }) => (
              <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Tipo de exame" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full bg-white">
                        <SelectItem value="exame">Exame1</SelectItem>
                        <SelectItem value="exame2">Exame2</SelectItem>
                        <SelectItem value="exame3">Exame3</SelectItem>
                        <SelectItem value="exame4">Exame4</SelectItem>
                    </SelectContent>
                  </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-[159px] h-14 bg-blue-900 text-white rounded-full cursor-pointer font-[Sora] font-bold leading-[24px]">Buscar <Image alt="Saiba Mais" src={"./icon-saiba-mais.svg"} width={32} height={32}></Image></Button>
        </form>
      </Form>
    </div>
  )
}
