"use client";
import { HeaderComponents } from "@/app/components/Header";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  interface Dado {
    id: number;
    relacionamento: string;
    aniversario: string;
    idade: number;
    profissao: string;
    moro: string;
    pais: string;
    cidade: string;
    // Outros campos, se houver
  }

  const [data, setData] = useState<Dado[]>([]);

  type RelacionamentoOption = 'opcao1' | 'opcao2' | 'opcao3' | 'opcao4' | 'opcao5';

  const relacionamentoTextMap: Record<RelacionamentoOption, string> = {
    opcao1: 'Solteiro',
    opcao2: 'Casado',
    opcao3: 'Divorciado',
    opcao4: 'Namorando',
    opcao5: 'Preocupado',
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter dados:", error);
      });
  }, []);

  return (
    <div>
      {/* header */}
      <HeaderComponents.Root>
        <HeaderComponents.Logo />
        <HeaderComponents.NavBar>
          <HeaderComponents.Link href="/" text="Início" />
          <HeaderComponents.Link
            href="/"
            text="Perfil"
            className="font-semibold text-brand-color"
          />
          <HeaderComponents.Link href="/" text="Comunidades" />
          <HeaderComponents.Link href="/" text="Jogos" />
        </HeaderComponents.NavBar>
        <HeaderComponents.Search />
        <HeaderComponents.ProfileMenu />
      </HeaderComponents.Root>
      {/* main content */}
      <div className="flex  gap-10 p-10">
        <section className="flex flex-col gap-10">
          <div className="flex w-64 flex-col items-center rounded-xl bg-dark-30 p-10">
            <div className="rounded-full border-4 border-brand-color">
              <div className="relative aspect-square w-36 overflow-hidden rounded-full border-4 border-dark-30">
                <Image src="https://i.imgur.com/jguCgC7.png" alt="foto" fill />
              </div>
            </div>
            <p className="mt-4">Iury Silva</p>
            <p>Solteiro, Brasil</p>
          </div>
          <div className="flex w-64 items-center justify-center rounded-xl bg-dark-30 p-6">
            <button className="text-1xl font-semibold text-brand-color">
              Editar meu perfil
            </button>
          </div>
        </section>
        <section className="space-y-5 rounded-xl bg-dark-30 p-10">
          <h1 className="text-2xl">Boa tarde,iury Silva</h1>
          <p className="rounded-xl bg-input-color p-4">
            Programar sem café é igual poeta sem poesia.
          </p>
          {/* -------------------------- */}
          <div className="flex gap-10">
            <div>
              <span>Fãs</span>
              <div className="flex gap-3">
                <Image
                  src="https://i.imgur.com/XnUKVy5.png"
                  alt="."
                  priority={true}
                  width={20}
                  height={20}
                />
                <span>85</span>
              </div>
            </div>
            <div>
              <span>Confiável</span>
              <div className="flex">
                <Image
                  src="https://i.imgur.com/pmC5Gem.png"
                  alt="."
                  priority={true}
                  width={20}
                  height={20}
                />
                <Image
                  src="https://i.imgur.com/pmC5Gem.png"
                  alt="."
                  priority={true}
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div>
              <span>Legal</span>
              <div className="flex">
                <Image
                  src="https://i.imgur.com/ZUIWmlR.png"
                  alt="."
                  priority={true}
                  width={20}
                  height={20}
                />
                <Image
                  src="https://i.imgur.com/ZUIWmlR.png"
                  alt="."
                  priority={true}
                  width={20}
                  height={20}
                />
                <Image
                  src="https://i.imgur.com/ZUIWmlR.png"
                  alt="."
                  priority={true}
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div>
              <span>Sexy</span>
              <div className="flex">
                <Image
                  src="https://i.imgur.com/bI8N4Bx.png"
                  alt="."
                  priority={true}
                  width={20}
                  height={20}
                />
                <Image
                  src="https://i.imgur.com/bI8N4Bx.png"
                  alt="."
                  priority={true}
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          {/* ------------------------------------------ */}
          <div className="space-y-4">
            {data.length > 0 && (
              <div>
                <p className="mb-4">
                  <span className="mr-4 text-dark-20">Relacionamento:</span>
                  {relacionamentoTextMap[data[0].relacionamento as RelacionamentoOption]}
                </p>
                <p className="mb-4">
                  <span className="mr-4 text-dark-20">Aniversário:</span>
                  {data[0].aniversario}
                </p>
                <p className="mb-4">
                  <span className="mr-4 text-dark-20">Idade:</span>
                  22
                </p>
                <p className="mb-4">
                  <span className="mr-4 text-dark-20">Quem sou eu:</span>
                  {data[0].profissao}
                </p>
                <p className="mb-4">
                  <span className="mr-4 text-dark-20">Moro:</span>
                  {data[0].cidade}
                </p>
                <p className="mb-4">
                  <span className="mr-4 text-dark-20">País:</span>
                  {data[0].pais}
                </p>
                <p className="mb-4">
                  <span className="mr-4 text-dark-20">Cidade:</span>
                  {data[0].cidade}
                </p>
              </div>
            )}
          </div>

          {/* ----------------------------------------- */}
          <div className="flex items-center">
            <span className="mr-4 text-dark-20">Músicas:</span>
            <div className="flex gap-5">
              <span className="rounded-full border-2 border-brand-color px-5 py-1">
                Trap
              </span>
              <span className="rounded-full border-2 border-brand-color px-5 py-1">
                Rap
              </span>
              <span className="rounded-full border-2 border-brand-color px-5 py-1">
                Indie
              </span>
              <button className="font-medium text-brand-color">
                Ver todos
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-dark-20">Filmes:</span>
            <div className="flex gap-5">
              <span className="rounded-full border-2 border-brand-color px-5 py-1">
                A rede social
              </span>
              <span className="rounded-full border-2 border-brand-color px-5 py-1">
                Meu amigo totoro
              </span>
            </div>
            <button className="ml-8 font-medium text-brand-color">
              Ver todos
            </button>
          </div>
        </section>
        {/* ----------------------------------------- */}
        <section className="flex w-80 flex-col gap-10">
          <div className="flex flex-col gap-5 rounded-xl bg-dark-30 p-5">
            <div className="flex justify-between">
              <p>Amigos(248)</p>
              <button className="text-brand-color">Ver todos</button>
            </div>
            <div className="flex flex-col gap-4">
              {/* ----------------------------------------- */}
              <div className="flex justify-between">
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/AFJ9Uhs.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Julia</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/AFJ9Uhs.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Julia</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/AFJ9Uhs.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Julia</p>
                </div>
              </div>
              {/* ----------------------------------------- */}
              <div className="flex justify-between">
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/AFJ9Uhs.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Julia</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/AFJ9Uhs.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Julia</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/AFJ9Uhs.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Julia</p>
                </div>
              </div>
              {/* --------------------------------------------------- */}
              <div className="flex justify-between">
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/AFJ9Uhs.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Julia</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/AFJ9Uhs.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Julia</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/AFJ9Uhs.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Julia</p>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------------------- */}
          <div className="flex flex-col gap-5 rounded-xl bg-dark-30 p-5">
            <div className="flex justify-between">
              <p>Amigos(248)</p>
              <button className="text-brand-color">Ver todos</button>
            </div>
            <div className="flex flex-col gap-4">
              {/* ----------------------------------------- */}
              <div className="flex justify-between">
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/bX3Ifjp.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Carros</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/bX3Ifjp.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Carros</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/bX3Ifjp.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Carros</p>
                </div>
              </div>
              {/* ----------------------------------------- */}
              <div className="flex justify-between">
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/bX3Ifjp.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Carros</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/bX3Ifjp.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Carros</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/bX3Ifjp.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Carros</p>
                </div>
              </div>
              {/* --------------------------------------------------- */}
              <div className="flex justify-between">
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/bX3Ifjp.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Carros</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/bX3Ifjp.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Carros</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    className="rounded-full"
                    src="https://i.imgur.com/bX3Ifjp.png"
                    alt="."
                    priority={true}
                    width={60}
                    height={60}
                  />
                  <p className="text-sm">Carros</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
