import { Column, Entity, Index } from "typeorm";

@Index("sort", ["adminuser", "sort"], {})
@Entity("inquiry_email", { schema: "makeshop" })
export class InquiryEmail {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "inquiry_type", length: 30 })
  inquiryType: string;

  @Column("text", { name: "email" })
  email: string;

  @Column("tinyint", { name: "sort", unsigned: true, default: () => "'0'" })
  sort: number;
}
