import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Entity("facebook_pixel_submit", { schema: "makeshop" })
export class FacebookPixelSubmit {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
