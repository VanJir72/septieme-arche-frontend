export const fetchProducts = async () => {
    try {
      const response = await fetch(' http://localhost:8080/septiemearche/products');
      // const response = await fetch('http://localhost:8080/septiemearche/products');
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }


  // https://api.escuelajs.co/api/v1/products


  