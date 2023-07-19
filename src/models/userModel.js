import { promisePool } from '../db.js';

const userModel = {
  async createuser(name) {
    try {
      const query = `
        INSERT INTO usuarios (nombre)
        VALUES (?);
      `;
      const [result] = await promisePool.execute(query, [name]);

      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getuser(id) {
    try {
      const query = `
        SELECT * FROM usuarios WHERE id = ?;
      `;
      const [rows] = await promisePool.execute(query, [id]);
      return rows;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getAllusers() {
    try {
      const query = 'SELECT * FROM usuarios;';
      const [rows] = await promisePool.execute(query);
      return rows;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async updateuser(id, { nombre: newName }) {
    try {
      const query = `
        UPDATE usuarios SET nombre=?
        WHERE id = ?;
      `;

      const conn = await promisePool.getConnection();
      const [result] = await conn.execute(query, [newName, id]);
      conn.release();

      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async deleteuser(id) {
    try {
      const query = 'DELETE FROM usuarios WHERE id = ?;';

      const conn = await promisePool.getConnection();
      const [result] = await conn.execute(query, [id]);
      conn.release();

      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export { userModel };
