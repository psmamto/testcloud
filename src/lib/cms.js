import fs from 'node:fs/promises';
import path from 'node:path';

const DATA_DIR = path.resolve('./src/data');

export async function getData(filename) {
    const filePath = path.join(DATA_DIR, filename);
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') return null;
        throw error;
    }
}

export async function saveData(filename, data) {
    const filePath = path.join(DATA_DIR, filename);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export async function getArticles() {
    return (await getData('articles.json')) || [];
}

export async function saveArticles(articles) {
    await saveData('articles.json', articles);
}

export async function getSettings() {
    return (await getData('settings.json')) || {};
}

export async function saveSettings(settings) {
    await saveData('settings.json', settings);
}

export async function getProducts() {
    return (await getData('products.json')) || [];
}

export async function saveProducts(products) {
    await saveData('products.json', products);
}
