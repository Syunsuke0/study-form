import { useForm } from "react-hook-form";
const RHFForm = ({ addItem }) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      product: "",
      quantity: 0,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    addItem(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="product">
          <input
            id="product"
            type="text"
            {...register("product", { required: "商品名は空にできません" })}
          />
          {errors.product && errors.product.message}
        </label>
      </div>
      <div>
        <label htmlFor="quantity">
          <input
            id="quantity"
            type="number"
            {...register("quantity", {
              required: "数量を入力してください",
              valueAsNumber: true,
              min: { value: 1, message: "1以上を入力してください" },
            })}
          />
          {errors.quantity && errors.quantity.message}
        </label>
      </div>
      <input type="submit" />
    </form>
  );
};

export default RHFForm;
