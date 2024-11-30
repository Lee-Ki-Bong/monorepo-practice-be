import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("admin_basket", ["adminuser", "ordernum", "basketNum"], {})
@Index("admin_order", ["adminuser", "ordernum"], {})
@Index("idx_auto_form_uid", ["formUid"], {})
@Entity("excel_order_user_form", { schema: "makeshop" })
export class ExcelOrderUserForm {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @PrimaryGeneratedColumn({ type: "int", name: "form_uid", unsigned: true })
  formUid: number;

  @Column("int", { name: "basket_num", default: () => "'0'" })
  basketNum: number;

  @Column("varchar", { name: "set_name", length: 50 })
  setName: string;

  @Column("varchar", { name: "set_value", nullable: true, length: 255 })
  setValue: string | null;

  @Column("mediumtext", { name: "set_text", nullable: true })
  setText: string | null;
}
