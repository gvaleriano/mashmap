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
import { useState } from "react"
import Image from "next/image"

// Esquema de validação com números positivos e mensagem de erro personalizada
const formSchema = z.object({
  idade: z
    .string()
    .min(1, "Os valores não estão no padrão para o cálculo ou o campo está vazio.")
    .refine(value => !isNaN(Number(value)) && Number(value) > 0, {
      message: "Os valores não estão no padrão para o cálculo ou o campo está vazio.",
    })
    .transform(value => Number(value)),

  tgo: z
    .string()
    .min(1, "Os valores não estão no padrão para o cálculo ou o campo está vazio.")
    .refine(value => !isNaN(Number(value)) && Number(value) > 0, {
      message: "Os valores não estão no padrão para o cálculo ou o campo está vazio.",
    })
    .transform(value => Number(value)),

  tgp: z
    .string()
    .min(1, "Os valores não estão no padrão para o cálculo ou o campo está vazio.")
    .refine(value => !isNaN(Number(value)) && Number(value) > 0, {
      message: "Os valores não estão no padrão para o cálculo ou o campo está vazio.",
    })
    .transform(value => Number(value)),

  plaquetas: z
    .string()
    .min(1, "Os valores não estão no padrão para o cálculo ou o campo está vazio.")
    .refine(value => !isNaN(Number(value)) && Number(value) > 0, {
      message: "Os valores não estão no padrão para o cálculo ou o campo está vazio.",
    })
    .transform(value => Number(value)),
})

export function CalculadoraForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
  const [resultado, setResultado] = useState("");
  const [resultadoInterpretacao, setResultadoInterpretacao] = useState("");
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { idade, tgo, tgp, plaquetas } = values;
  
    // Fórmula do FIB-4
    const fib4 = (idade * tgo) / (plaquetas * Math.sqrt(tgp));
  
    let interpretacao = "";
  
    // Interpretação baseada na idade
    if (idade > 65) {
      if (fib4 < 2.0) {
        interpretacao = "Baixo risco de fibrose avançada.";
      } else if (fib4 >= 2.0 && fib4 <= 2.67) {
        interpretacao = "Zona indeterminada; recomenda-se avaliação adicional.";
      } else {
        interpretacao = "Alto risco de fibrose avançada.";
      }
    } else if (idade >= 35 && idade <= 65) {
      if (fib4 < 1.3) {
        interpretacao = "Baixo risco de fibrose avançada.";
      } else if (fib4 >= 1.3 && fib4 <= 2.67) {
        interpretacao = "Zona indeterminada; recomenda-se avaliação adicional.";
      } else {
        interpretacao = "Alto risco de fibrose avançada.";
      }
    } else {
      interpretacao = "FIB-4 não é aplicável para menores de 35 anos.";
    }

    setResultado(fib4.toFixed(2))
    setResultadoInterpretacao(interpretacao)
  }

  return (
    <div className="w-full p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo Idade */}
          <FormField
            control={form.control}
            name="idade"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Idade"
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

          {/* Campo TGO */}
          <FormField
            control={form.control}
            name="tgo"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="TGO (U/L)"
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

          {/* Campo TGP */}
          <FormField
            control={form.control}
            name="tgp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="TGP (U/L)"
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

          {/* Campo Plaquetas */}
          <FormField
            control={form.control}
            name="plaquetas"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Plaquetas (X1000/mm3)"
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
          <Button className="w-[159px] h-14 bg-blue-900 text-white rounded-full cursor-pointer font-[Sora] font-bold leading-[24px]">Calcular <Image alt="Saiba Mais" src={"./icon-saiba-mais.svg"} width={32} height={32}></Image></Button>
          {resultado && (
              <div className="mt-4 p-4 bg-blue-300 rounded border-dashed border-3  border-blue-900">
                <p className="font-bold">Resultado FIB-4: {resultado}</p>
                <p className="mt-2">{resultadoInterpretacao}</p>
              </div>
            )}
        </form>
      </Form>
    </div>
  )
}
