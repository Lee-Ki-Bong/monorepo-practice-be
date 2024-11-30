import { Column, Entity } from "typeorm";

@Entity("test_euckr_varchar", { schema: "makeshop" })
export class TestEuckrVarchar {
  @Column("varchar", { name: "content", length: 20 })
  content: string;
}
