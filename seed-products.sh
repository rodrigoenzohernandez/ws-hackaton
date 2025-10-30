#!/bin/bash

# Script to seed sample products into the database
# Run this after starting the Docker containers

API_URL="http://localhost:3001/api"

echo "🌱 Seeding products to Don Piponne API..."

# Product 1: Pizza Party
curl -X POST "${API_URL}/products" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Pizza Party",
    "description": "Pizzas artesanales elaboradas con ingredientes de primera calidad. Incluye variedades clásicas y gourmet.",
    "category": "Eventos",
    "features": ["Pizzas en el momento", "Variedad de gustos", "Pizzero incluido", "20-200 personas"],
    "isActive": true,
    "order": 1
  }'

echo ""

# Product 2: Catering
curl -X POST "${API_URL}/products" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Catering",
    "description": "Servicio completo de catering para todo tipo de eventos. Menús personalizados según tus necesidades.",
    "category": "Eventos",
    "features": ["Menús personalizados", "Servicio de mozos", "Vajilla incluida", "Montaje completo"],
    "isActive": true,
    "order": 2
  }'

echo ""

# Product 3: Viandas para Empresas
curl -X POST "${API_URL}/products" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Viandas para Empresas",
    "description": "Menús ejecutivos completos y balanceados con entrega puntual todos los días.",
    "category": "Empresas",
    "features": ["Menús balanceados", "Entrega puntual", "Precios especiales", "Facturación mensual"],
    "isActive": true,
    "order": 3
  }'

echo ""

# Product 4: Barra de Tragos
curl -X POST "${API_URL}/products" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Barra de Tragos",
    "description": "Servicio profesional de barra de tragos con barman especializado para tus eventos.",
    "category": "Eventos",
    "features": ["Barman profesional", "Cócteles clásicos y de autor", "Cristalería incluida", "Decoración de barra"],
    "isActive": true,
    "order": 4
  }'

echo ""

# Product 5: Pernil
curl -X POST "${API_URL}/products" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Pernil",
    "description": "Pernil al horno tierno y jugoso, perfecto para grandes eventos y celebraciones.",
    "category": "Eventos",
    "features": ["Pernil al horno", "Corte incluido", "Guarniciones opcionales", "30-150 personas"],
    "isActive": true,
    "order": 5
  }'

echo ""

# Product 6: Empanadas
curl -X POST "${API_URL}/products" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Empanadas",
    "description": "Empanadas caseras con rellenos variados. Carne, pollo, jamón y queso, y más opciones.",
    "category": "Eventos",
    "features": ["Masa casera", "Variedad de rellenos", "Horneadas o fritas", "Por docena o por ciento"],
    "isActive": true,
    "order": 6
  }'

echo ""
echo "✅ Products seeded successfully!"
echo "Check: ${API_URL}/products"
