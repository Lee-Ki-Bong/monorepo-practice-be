import { Column, Entity } from "typeorm";

@Entity("shoppingbox_upload", { schema: "makeshop" })
export class ShoppingboxUpload {
  @Column("varchar", { primary: true, name: "filename", length: 30 })
  filename: string;

  @Column("varchar", { name: "insertdate", length: 8 })
  insertdate: string;
}
