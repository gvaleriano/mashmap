/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"
export function GoogleMaps(){
  const mapRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const initMap = async () => {
        const loader = new Loader({
          apiKey: "AIzaSyD5MesZk-maxV7Nonql1Um-J0UtCHAl1Es",
          version: "weekly",
        })

        const { Map } = await loader.importLibrary('maps');
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
        const position = {
          lat: -23.55052,
          lng: -46.633309
        }
        
        const mapOptions: google.maps.MapOptions = {
          center: position,
          zoom: 15,
          mapId: "MY_MAP_ID"
        }

        const map = new Map(mapRef.current as HTMLDivElement, mapOptions)
        
        const marker = new AdvancedMarkerElement({
          map: map,
          position: position
        });
    }

    initMap();
  }, [])

  return(
    <div className="h-full w-full" ref={mapRef}>

    </div>
  )
}