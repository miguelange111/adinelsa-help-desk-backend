export const querys = {
  /*
  getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products]",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
  */
  getAllRoles: "SELECT * FROM Rol",
  getUserByLogin: "SELECT * FROM Usuarios WHERE correo_electronico=@email AND password=@password",
  getIncidencias: "SELECT * FROM Incidencia",
  getEstadoIncidencia: "SELECT * FROM EstadoIncidencia",
  getTipoIncidencia: "SELECT * FROM TipoIncidencia",
};
