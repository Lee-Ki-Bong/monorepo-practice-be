import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_label_no", ["labelNo"], {})
@Entity("label_icon", { schema: "makeshop" })
export class LabelIcon {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "label_path",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  labelPath: "" | "WEB" | "MOBILE";

  @PrimaryGeneratedColumn({ type: "int", name: "label_no", unsigned: true })
  labelNo: number;
}
