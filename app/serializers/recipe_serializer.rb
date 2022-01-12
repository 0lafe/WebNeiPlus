class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :power, :amps, :duration, :inputs, :outputs, :formatted_inputs
  has_many :inputs
  has_many :outputs

  def formatted_inputs
    x = 3
    y = 3

    output = []
    x.times do
      row = []
      y.times do
        row << nil
      end
      output << row
    end

    object.inputs.each { |input|
      realx = (input["relx"].to_f/18).floor() - 1
      realy = (input["rely"].to_f/18).floor()
      output[realy][realx] = {
        quantity: input["quantity"],
        item: Item.find(input["item_id"])
      }
    }

    return output

  end

end
