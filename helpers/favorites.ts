'use client'

import type { Product } from '@/data/products'

const STORAGE_KEY = 'floreria-selected-products'
const EVENT_NAME = 'floreria:selected-products-updated'
const MAX_ITEMS = 12

type SelectedProduct = Pick<
  Product,
  'slug' | 'name' | 'category' | 'categoryLabel' | 'shortDescription' | 'description' | 'image' | 'badges' | 'isCondolence'
>

function isBrowser() {
  return typeof window !== 'undefined'
}

function isSelectedProduct(value: unknown): value is SelectedProduct {
  if (!value || typeof value !== 'object') return false
  const product = value as Record<string, unknown>
  return (
    typeof product.slug === 'string' &&
    typeof product.name === 'string' &&
    typeof product.categoryLabel === 'string' &&
    typeof product.shortDescription === 'string' &&
    typeof product.description === 'string' &&
    typeof product.image === 'string' &&
    Array.isArray(product.badges)
  )
}

export function getSelectedProducts(): SelectedProduct[] {
  if (!isBrowser()) return []

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter(isSelectedProduct) : []
  } catch {
    return []
  }
}

function emitUpdate() {
  if (!isBrowser()) return
  window.dispatchEvent(new CustomEvent(EVENT_NAME))
}

export function saveSelectedProducts(items: SelectedProduct[]) {
  if (!isBrowser()) return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  emitUpdate()
}

export function addSelectedProduct(product: SelectedProduct) {
  if (!product?.slug) return

  const current = getSelectedProducts().filter((item) => item.slug !== product.slug)
  const next = [product, ...current].slice(0, MAX_ITEMS)
  saveSelectedProducts(next)
}

export function removeSelectedProduct(slug: string) {
  const next = getSelectedProducts().filter((item) => item.slug !== slug)
  saveSelectedProducts(next)
}

export function clearSelectedProducts() {
  saveSelectedProducts([])
}

export function subscribeToSelectedProducts(callback: () => void) {
  if (!isBrowser()) return () => {}

  const listener = () => callback()
  window.addEventListener(EVENT_NAME, listener)
  window.addEventListener('storage', listener)

  return () => {
    window.removeEventListener(EVENT_NAME, listener)
    window.removeEventListener('storage', listener)
  }
}
